"use client";
import { useStoreCopy } from "@/i18n/use-store-copy";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { DemoForm, SubmitButton } from "@/components/forms/demo-form";
import { FormInput } from "@/components/forms/form-input";
import { FormCheckbox } from "@/components/forms/form-checkbox";
import { loginSchema } from "@/validation/auth/login";
import { registerSchema } from "@/validation/auth/register";
import { forgotPasswordSchema } from "@/validation/auth/forgot-password";

const copy = {
  login: { eyebrow: "GOOD TO SEE YOU AGAIN", title: "Welcome back, player.", description: "Your next upgrade is waiting. Sign in to your account.", button: "Sign in", schema: loginSchema, message: "Demo sign-in completed. No account session was created." },
  register: { eyebrow: "JOIN THE NEXT LEVEL", title: "Your journey starts here.", description: "Create your player account. Discover gear worth playing for.", button: "Create account", schema: registerSchema, message: "Demo registration completed. No account was created or saved." },
  forgot: { eyebrow: "LET?S GET YOU BACK", title: "Forgot your password?", description: "Enter your email to preview the password reset flow.", button: "Send reset link", schema: forgotPasswordSchema, message: "Demo reset request completed. No email was sent." },
};

export function AuthForm({ mode }: { mode: keyof typeof copy }) {
  const translate = useStoreCopy();

  const content = copy[mode];
  return <div className="w-full max-w-md">
    <p className="text-xs font-semibold tracking-[0.2em] text-purple-600 dark:text-purple-400">{translate(content.eyebrow)}</p>
    <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{translate(content.title)}</h1>
    <p className="mt-3 text-sm leading-6 text-muted-foreground">{translate(content.description)}</p>
    <div className="mt-8">
      <DemoForm key={mode} schema={content.schema} initialValues={{ firstName: "", lastName: "", email: "", password: "", confirmPassword: "", acceptTerms: false, rememberMe: false }} message={translate(content.message)}>
        {mode === "register" && <div className="grid gap-4 sm:grid-cols-2"><FormInput name="firstName" label={translate("First name")} autoComplete="given-name" placeholder={translate("Alex")} /><FormInput name="lastName" label={translate("Last name")} autoComplete="family-name" placeholder={translate("Morgan")} /></div>}
        <FormInput name="email" type="email" label={translate("Email address")} autoComplete="email" placeholder={translate("you@example.com")} />
        {mode !== "forgot" && <FormInput name="password" type="password" label={translate("Password")} autoComplete={mode === "login" ? "current-password" : "new-password"} placeholder={translate("Enter your password")} hint={translate(mode === "register" ? "8+ characters, with uppercase, lowercase, and a number." : undefined)} />}
        {mode === "register" && <><FormInput name="confirmPassword" type="password" label={translate("Confirm password")} autoComplete="new-password" placeholder={translate("Enter your password again")} /><FormCheckbox name="acceptTerms">{translate("I agree to the ")}<Link href="/terms" className="text-purple-600 underline dark:text-purple-300">{translate("Terms of Service")}</Link> {translate(" and ")}<Link href="/privacy" className="text-purple-600 underline dark:text-purple-300">{translate("Privacy Policy")}</Link>.</FormCheckbox></>}
        {mode === "login" && <div className="flex flex-wrap items-center justify-between gap-3"><FormCheckbox name="rememberMe">{translate("Remember me")}</FormCheckbox><Link href="/forgotpassword" className="text-sm font-medium text-purple-600 hover:underline dark:text-purple-300">{translate("Forgot password?")}</Link></div>}
        <SubmitButton>{translate(content.button)}<ArrowRight className="size-4" /></SubmitButton>
      </DemoForm>
    </div>
    <p className="mt-6 text-center text-sm text-muted-foreground">{translate(mode === "login" ? "New to the squad? " : "Already part of the squad? ")}<Link href={mode === "login" ? "/signup" : "/login"} className="font-semibold text-purple-600 hover:underline dark:text-purple-300">{translate(mode === "login" ? "Create an account" : "Sign in")}</Link></p>
    <div className="mt-8 flex items-start gap-2 border-t border-border pt-5 text-xs leading-5 text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0" /><p>{translate("Preview mode. Forms validate locally; accounts, emails, and remembered sessions are simulated.")}</p></div>
  </div>;
}
