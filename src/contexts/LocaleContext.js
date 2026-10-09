import React from "react";

const localeContext = React.createContext();

export const LocaleProvider = localeContext.Provider;
export const LocaleConsumer = localeContext.Consumer;

export default localeContext;