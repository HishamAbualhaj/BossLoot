import "server-only";
import { getLocale, getTranslations } from "next-intl/server";
import { createStoreCopy } from "./store-copy";

export async function getStoreCopy() {
  const [t, locale] = await Promise.all([getTranslations("store"), getLocale()]);
  return createStoreCopy(t, locale);
}
