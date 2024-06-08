import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locale/en.json";
import translationSW from "./locale/sw.json";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: translationEN,
    },
    sw: {
        translation: translationSW,
    },
};

i18n
    .use(i18nextBrowserLanguagedetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;