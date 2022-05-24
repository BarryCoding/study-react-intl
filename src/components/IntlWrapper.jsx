import React, { useState } from 'react';

import { IntlProvider } from 'react-intl';
import Spanish from '../i18n/es-MX.json';
import English from '../i18n/en-US.json';

const defaultLocale = navigator.language;
let language;
if (defaultLocale === 'en-US') {
  language = English;
} else {
  language = Spanish;
}
export const IntlContext = React.createContext();
export default function IntlWrapper(props) {
  const [locale, setLocate] = useState(defaultLocale);
  const [messages, setMessages] = useState(language);

  const selectLanguage = (e) => {
    const newLocale = e.target.value;
    setLocate(newLocale);
    if (newLocale === 'en-US') {
      setMessages(English);
    } else {
      setMessages(Spanish);
    }
  };
  return (
    <IntlContext.Provider value={{ locale, selectLanguage }}>
      <IntlProvider
        locale={locale}
        messages={messages}
        defaultLocale={defaultLocale}
      >
        {props.children}
      </IntlProvider>
    </IntlContext.Provider>
  );
}
