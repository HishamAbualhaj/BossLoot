import type { ComponentProps } from "react";
import { Input as PrimitiveInput } from "@/components/ui/primitives/input";
import { cn } from "@/lib/cn";
export default function Input({ className, ...props }: ComponentProps<typeof PrimitiveInput>) {
  return <PrimitiveInput {...props} className={cn("h-auto w-64 bg-gray-100 py-3 text-black dark:bg-secondary/50 dark:text-white", className)} />;
}
