import { Gamepad2, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/cn";

export function BossLootLoader({
  fullScreen = false,
}: {
  fullScreen?: boolean;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={cn(
        "store-ui flex w-full flex-col items-center justify-center bg-background px-6 py-16 text-foreground",
        fullScreen ? "min-h-svh" : "min-h-[65vh]",
      )}
    >
      <div className="relative mb-6 flex size-20 items-center justify-center rounded-2xl border border-purple-400/25 bg-purple-500/10">
        <Gamepad2 aria-hidden="true" className="size-9 text-purple-400" />
        <span className="absolute -bottom-2 -right-2 rounded-full bg-background p-1.5">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin text-purple-400 motion-reduce:animate-none"
          />
        </span>
      </div>
      <p aria-hidden="true" className="text-2xl font-bold tracking-tight">
        Boss<span className="text-purple-400">Loot</span>
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        Loading your next level...
      </p>
    </div>
  );
}
