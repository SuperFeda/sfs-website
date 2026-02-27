import i18next from 'i18next';
import {initReactI18next} from "react-i18next";

import ru from "../public/locales/ru/translation.json"
import en from "../public/locales/en/translation.json"
import ru1918 from "../public/locales/ru1918/translation.json"

i18next
    .use(initReactI18next)
    .init({
    lng: "ru",
    fallbackLng: ["en", "ru"],
    debug: true,
    resources: {
        ru: {
            translation: ru
        },
        en: {
            translation: en
        },
        ru1918: {
            translation: ru1918
        }
    }
});
