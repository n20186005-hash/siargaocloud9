export const languages = {
  en: { label: 'English', code: 'en-PH', locale: 'en_PH' },
  fil: { label: 'Filipino', code: 'fil-PH', locale: 'fil_PH' },
} as const;

export type LangCode = keyof typeof languages;
export const defaultLang: LangCode = 'en';
