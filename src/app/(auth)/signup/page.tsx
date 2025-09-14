"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  const inputs = [
    {
      placeholder: "Email",
      className: "w-full",
      onChange: () => {},
      type: "text",
    },
    {
      placeholder: "Password",
      className: "w-full",
      onChange: () => {},
      type: "password",
    },
    {
      placeholder: "Confirm Password",
      className: "w-full",
      onChange: () => {},
      type: "password",
    },
  ];
  return (
    <>
      <div className="text-center">
        <div className="text-2xl">Create your account</div>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <div className="flex gap-4 max-sm:flex-col">
          <Input
            onChange={() => {}}
            placeholder="First name"
            type="text"
            className="w-full"
          />
          <Input
            onChange={() => {}}
            placeholder="Last name"
            type="text"
            className="w-full"
          />
        </div>
        {inputs.map((input, i) => (
          <Input
            key={i}
            onChange={input.onChange}
            placeholder={input.placeholder}
            type={input.type}
            className={input.className}
          />
        ))}
        <Button title="Create account" />
      </div>
      <div className="text-gray-400 mt-3 text-sm flex gap-1 items-center">
        Already have an account?
        <Link
          className="text-sm block w-fit text-purple-300 hover:underline"
          href="/login"
        >
          login
        </Link>
      </div>
      <div className="text-sm mt-3 text-gray-400">
        By clicking "Create Account," you agree to BossLoot's{" "}
        <Link className="hover:underline text-purple-400" href="/">
          Terms of Service{" "}
        </Link>
        and have read the{" "}
        <Link className="hover:underline text-purple-400" href="/">
          Privacy Policy{" "}
        </Link>
      </div>
    </>
  );
};

export default SignupPage;
