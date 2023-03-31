import { useState, createContext, useContext } from "react";
import { readCookie } from "../utils/cookie";
import { IntlProvider } from "react-intl";

export const LocaleContext = createContext({
  locale: "en",
});

export const LocaleProvider = ({ children }) => {
  const cookieLocale = readCookie("_8i_locale");
  const [locale, setLocale] = useState(cookieLocale || "en");
  const messages = require(`../../translation/${locale}.json`);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
