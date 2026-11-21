
import { useStoreCopy } from "@/i18n/use-store-copy";
import type { ComponentProps } from "react";
import { Button as PrimitiveButton } from "@/components/ui/primitives/button";
import { cn } from "@/lib/cn";
type Props = Omit<ComponentProps<typeof PrimitiveButton>, "title"> & { title: string; isLoading?: boolean; loadingText?: string };
export default function Button({ title, isLoading = false, loadingText = "Loading...", className, disabled, type = "button", ...props }: Props) {
  const translate = useStoreCopy();

  return <PrimitiveButton {...props} type={type} disabled={disabled || isLoading} aria-busy={isLoading} className={cn("h-auto w-full py-2 text-white", className)}>{translate(isLoading ? loadingText : title)}</PrimitiveButton>;
}
