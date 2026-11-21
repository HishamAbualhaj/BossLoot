"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ChevronDown, Languages } from "lucide-react";
import { setLocale } from "@/app/actions/locale";
import { locales } from "@/i18n/config";

import { Button } from "@/components/ui/primitives/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/primitives/dropdown-menu";
const names = { en: "English", ar: "العربية", fr: "Français" };

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("common");
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState(false);
  return <div className="relative">
    <DropdownMenu dir={locale === "ar" ? "rtl" : "ltr"}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" disabled={pending} aria-label={t("language")} aria-busy={pending} className="h-11 gap-2 rounded-lg border-border bg-transparent px-3">
          <Languages aria-hidden="true" className="size-4 text-purple-400" />
          <span>{names[locale as keyof typeof names]}</span>
          <ChevronDown aria-hidden="true" className="size-3.5 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 rounded-xl border-border bg-card p-2 shadow-xl">
        <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={locale} onValueChange={next => {
          setError(false);
          startTransition(async () => {
            try { await setLocale(next); router.refresh(); }
            catch { setError(true); }
          });
        }}>
          {locales.map(value => <DropdownMenuRadioItem key={value} value={value} disabled={pending} className="min-h-11 cursor-pointer rounded-md"><span lang={value}>{names[value]}</span><span className="ms-auto text-xs uppercase text-muted-foreground">{value}</span></DropdownMenuRadioItem>)}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>    {error && <p role="alert" className="absolute end-0 top-full z-50 mt-1 w-48 rounded-md border border-border bg-card p-2 text-xs">{t("languageError")}</p>}
  </div>;
}


