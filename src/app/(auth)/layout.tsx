
import { useStoreCopy } from "@/i18n/use-store-copy";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Gamepad2, Sparkles, Zap } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const translate = useStoreCopy();

  return <main className="store-ui grid min-h-svh bg-white text-foreground dark:bg-background lg:grid-cols-[1fr_1fr]">
    <aside className="relative m-4 hidden min-h-[calc(100svh-2rem)] overflow-hidden rounded-3xl bg-[#10101b] text-white lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">
      <Image src="/bg_login.jpg" fill sizes="50vw" alt={translate("A gaming setup with ambient lighting")} className="object-cover opacity-50" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-[#10101b] via-[#10101b]/35 to-[#10101b]/50" />
      <div className="relative"><Logo /><div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-purple-200"><Sparkles className="size-3.5" />{translate("Built for your next level")}</div></div>
      <div className="relative max-w-lg"><div className="mb-6 flex size-14 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/20"><Gamepad2 className="size-7 text-purple-300" /></div><h2 className="text-5xl font-semibold leading-[1.12] tracking-tight xl:text-6xl">{translate("Great gear.")}<br />{translate("Greater ")}<span className="text-purple-300">{translate("possibilities.")}</span></h2><p className="mt-6 max-w-sm text-base leading-7 text-slate-300">{translate("Build your dream setup. Find your competitive edge. Make every session yours.")}</p><div className="mt-10 flex items-center gap-3 border-t border-white/15 pt-6 text-sm text-slate-300"><Zap className="size-4 text-purple-300" />{translate("Gear up. Game on. BossLoot.")}</div></div>
      <p className="relative mt-8 text-xs text-slate-400">{translate("Your world. Your play. Your next upgrade.")}</p>
    </aside>
    <section className="flex min-w-0 flex-col px-6 py-7 sm:px-12 lg:px-14 xl:px-24"><div className="flex items-center justify-between"><div className="lg:hidden"><Logo /></div><Link href="/" className="ms-auto inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary"><ArrowLeft className="size-4" />{translate("Back to store")}</Link></div><div className="flex flex-1 items-center justify-center py-12 lg:py-10">{translate(children)}</div><p className="text-center text-xs text-muted-foreground">{translate("BossLoot ? Made for the way you play.")}</p></section>
  </main>;
}
