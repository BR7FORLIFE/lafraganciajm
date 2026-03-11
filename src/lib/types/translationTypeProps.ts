import { useTranslate } from "lib/i18n";

export interface TranslationProps {
  t: ReturnType<typeof useTranslate>;
}