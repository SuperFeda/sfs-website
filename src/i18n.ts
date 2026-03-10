import i18next from 'i18next';
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from "../public/locales/ru/translation.json"
import en from "../public/locales/en/translation.json"
import mn from "../public/locales/mn/translation.json"
import ru1918 from "../public/locales/ru1918/translation.json"

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: ["en", "ru"],
        debug: true,
        resources: {
            ru: {
                translation: ru
            },
            en: {
                translation: en
            },
            mn: {
                translation: mn
            },
            ru1918: {
                translation: ru1918
            }
        },
        detection: {
            order: ["localStorage", "navigator"],
            lookupLocalStorage: "i18nextLang",
            caches: ["localStorage"]
        }
    }
);
