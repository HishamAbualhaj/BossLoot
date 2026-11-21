"use client";
import { useStoreCopy } from "@/i18n/use-store-copy";

import { useField } from "formik";
import type { ReactNode } from "react";
import { Checkbox } from "@/components/ui/primitives/checkbox";
import { Label } from "@/components/ui/primitives/label";

export function FormCheckbox({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  const translate = useStoreCopy();

  const [field, meta, helpers] = useField<boolean>({ name, type: "checkbox" });
  const error = meta.touched ? meta.error : undefined;
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-3">
        <Checkbox
          id={name}
          name={name}
          checked={field.value}
          onCheckedChange={(checked) => {
            void helpers.setValue(checked === true);
          }}
          onBlur={() => {
            void helpers.setTouched(true);
          }}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
        <Label
          htmlFor={name}
          className="inline-block text-sm font-normal leading-relaxed text-muted-foreground"
        >
          {translate(children)}
        </Label>
      </div>
      {translate(error && (
        <p
          id={`${name}-error`}
          role="alert"
          className="text-xs text-rose-600/80 dark:text-rose-300/80"
        >
          {translate(error)}
        </p>
      ))}
    </div>
  );
}
