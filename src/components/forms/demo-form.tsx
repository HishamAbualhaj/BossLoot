"use client";
import { useStoreCopy } from "@/i18n/use-store-copy";


import { Formik, Form, useFormikContext, type FormikValues } from "formik";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { type ReactNode } from "react";
import type { AnyObjectSchema } from "yup";
import { Button } from "@/components/ui/primitives/button";

export function DemoForm<Values extends FormikValues>({
  initialValues,
  schema,
  children,
  message,
  onSuccess,
  id,
}: {
  initialValues: Values;
  schema: Pick<AnyObjectSchema, "validate" | "validateAt">;
  children: ReactNode;
  message: string;
  id?: string;
  onSuccess?: (values: Values) => void | Promise<void>;
}) {
  const translate = useStoreCopy();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={async (values, helpers) => {
        helpers.setStatus(undefined);
        try {
          await new Promise<void>((resolve) => setTimeout(resolve, 500));
          // Demo only: credentials and card data are never sent or persisted.
          helpers.setStatus({ message });
          await onSuccess?.(values);
        } catch {
          helpers.setStatus({
            error: "Something went wrong. Please try again.",
          });
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form id={id} noValidate className="space-y-5">
          <FormFeedback />
          <fieldset
            disabled={isSubmitting}
            className="space-y-5 disabled:opacity-70"
          >
            {translate(children)}
          </fieldset>
        </Form>
      )}
    </Formik>
  );
}

function FormFeedback() {
  const translate = useStoreCopy();

  const { status } = useFormikContext();
  return (
    <>
      {translate(status?.message && (
        <div
          role="status"
          className="flex gap-3 rounded-md border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm text-emerald-700 dark:text-emerald-300"
        >
          <CheckCircle2 className="size-5 shrink-0" />
          {translate(status.message)}
        </div>
      ))}
      {translate(status?.error && (
        <p role="alert" className="text-sm text-rose-400/80">
          {translate(status.error)}
        </p>
      ))}
    </>
  );
}

export function SubmitButton({
  children,
  loadingText = "Please wait...",
}: {
  children: ReactNode;
  loadingText?: string;
}) {
  const translate = useStoreCopy();

  const { isSubmitting } = useFormikContext();
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className="h-12 w-full rounded-xl font-semibold shadow-lg shadow-purple-900/15"
    >
      {isSubmitting && (
        <LoaderCircle className="size-4 animate-spin motion-reduce:animate-none" />
      )}
      {translate(isSubmitting ? loadingText : children)}
    </Button>
  );
}
