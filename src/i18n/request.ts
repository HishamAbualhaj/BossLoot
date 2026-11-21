import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isLocale, localeCookie } from "./config";

export default getRequestConfig(async () => {
  const saved = (await cookies()).get(localeCookie)?.value;
  const locale = isLocale(saved) ? saved : defaultLocale;
  const [common, landing, admin, cart, store, blog] = await Promise.all([
    import(`../messages/${locale}/common.json`),
    import(`../messages/${locale}/landing.json`),
    import(`../messages/${locale}/admin.json`),
    import(`../messages/${locale}/cart.json`),
    import(`../messages/${locale}/store.json`),
    import(`../messages/${locale}/blog.json`),
  ]);
  return {
    locale,
    timeZone: "UTC",
    formats: { number: { count: { numberingSystem: locale === "ar" ? "arab" : "latn" } } },
    messages: {
      common: common.default,
      landing: landing.default,
      admin: admin.default, cart: cart.default, store: store.default, blog: blog.default,
    },
  };
});
