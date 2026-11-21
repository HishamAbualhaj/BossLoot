import { useLocale, useTranslations } from "next-intl";
import { createStoreCopy } from "./store-copy";

export function useStoreCopy() {
  return createStoreCopy(useTranslations("store"), useLocale());
}
