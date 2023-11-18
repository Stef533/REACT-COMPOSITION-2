import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(); 

export function Clock() {
  const language = useContext(LanguageContext);

  const getCurrentTime = () => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Intl.DateTimeFormat(language, options).format(new Date());
  };

  return (
    <div>
      <h2>{`Current Time (${language}): ${getCurrentTime()}`}</h2>
    </div>
  );
}

export function ClockAdd() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  return (
    <LanguageContext.Provider value={selectedLanguage}>
      <div>
        <label>Select Language: </label>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>

        <Clock />
      </div>
    </LanguageContext.Provider>
  );
}
