"use client";

import { useField } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { useState, type ComponentProps } from "react";
import { Input } from "@/components/ui/primitives/input";
import { Label } from "@/components/ui/primitives/label";

type Props = ComponentProps<typeof Input> & { name: string; label: string; hint?: string };

export function FormInput({ label, hint, type = "text", ...props }: Props) {
  const [field, meta] = useField<string>(props.name);
  const [visible, setVisible] = useState(false);
  const error = meta.touched ? meta.error : undefined;
  const id = props.id || props.name;
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input {...props} {...field} id={id} type={type === "password" && visible ? "text" : type} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined} className={`h-12 rounded-md bg-white dark:bg-white/[0.03] ${type === "password" ? "pr-12" : ""} ${props.className || ""}`} />
        {type === "password" && <button type="button" aria-label={visible ? "Hide password" : "Show password"} aria-pressed={visible} onClick={() => setVisible(!visible)} className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center text-muted-foreground hover:text-primary">{visible ? <EyeOff size={17} /> : <Eye size={17} />}</button>}
      </div>
      {error ? <p id={`${id}-error`} role="alert" className="text-xs text-rose-600/80 dark:text-rose-300/80">{error}</p> : hint ? <p id={`${id}-hint`} className="text-xs leading-relaxed text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
