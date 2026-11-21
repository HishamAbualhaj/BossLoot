
import { getStoreCopy } from "@/i18n/store-copy-server";
import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import Link from "next/link";
import { ArrowRight, Gamepad2, Search, User } from "lucide-react";
import DarkModeToggle from "../ui/DarkModeToggle";
import { CartLink } from "@/components/landing/cart-link";
export default async function Header() {
  const translate = await getStoreCopy();

  const t = await getTranslations("common");
  return (
    <>
      <div className="bg-[#251339] px-4 py-2.5 text-center text-[11px] text-purple-100">
        <Link
          href="/products?category=specials"
          className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
        >
          <span className="font-semibold tracking-wider text-purple-300">
            {translate(t("promoTitle"))}
          </span>
          <span>{translate(t("promoDescription"))}</span>
          <ArrowRight className="size-3" />
        </Link>
      </div>
      <header className="store-ui sticky top-0 z-50 border-b border-border bg-card/95 text-foreground backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-5 gap-y-3 px-5 py-4 sm:px-8 lg:px-12">
          <Link
            href="/"
            aria-label={translate(t("homeLabel"))}
            className="flex shrink-0 items-center gap-2.5"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
              <Gamepad2 className="size-6" />
            </span>
            <span className="text-xl font-bold tracking-tight">
              {translate(" Boss")}<span className="text-purple-500">{translate("Loot")}</span>
              <span className="ms-1 align-top text-[9px] text-muted-foreground">
                {translate(" TM ")}</span>
            </span>
          </Link>
          <nav
            aria-label={translate(t("navigation"))}
            className="order-last flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-border pt-3 text-sm sm:gap-7 lg:order-none lg:w-auto lg:border-0 lg:pt-0"
          >
            {[
              { title: t("home"), href: "/" },
              { title: t("shop"), href: "/products" },
              { title: t("pcGear"), href: "/products?platform=pc" },
              { title: t("deals"), href: "/products?category=specials" },
              { title: t("journal"), href: "/blog" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="whitespace-nowrap text-muted-foreground transition hover:text-purple-500"
              >
                {translate(item.title)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 sm:gap-3">
            <form
              action="/products"
              method="get"
              role="search"
              className="relative hidden xl:block"
            >
              <input
                type="search"
                name="search"
                aria-label={translate(t("search"))}
                placeholder={translate(t("searchPlaceholder"))}
                className="h-10 w-52 rounded-md border border-border bg-muted/30 ps-3 pe-10 text-xs outline-none focus:border-purple-400"
              />
              <button
                type="submit"
                aria-label={translate(t("submitSearch"))}
                className="absolute end-0 top-0 flex size-10 items-center justify-center text-muted-foreground"
              >
                <Search className="size-4" />
              </button>
            </form>
            <LanguageSwitcher />
            <DarkModeToggle />
            <Link
              href="/login"
              aria-label={translate(t("signIn"))}
              className="flex size-10 items-center justify-center rounded-md transition hover:bg-muted"
            >
              <User className="size-[19px]" />
            </Link>
            <CartLink />
          </div>
        </div>
      </header>
    </>
  );
}
