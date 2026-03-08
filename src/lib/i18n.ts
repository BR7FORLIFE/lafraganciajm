import es from "@i18n/es.json";
import en from "@i18n/en.json";

type TranslationSchema = typeof es;

export type Locale = "es" | "en";

const translations: Record<Locale, TranslationSchema> = {
    es,
    en,
};

export function useTranslate<L extends Locale>(locale: L) {
    return function t<K extends keyof TranslationSchema>(key: K) {
        return translations[locale][key];
    };
}
