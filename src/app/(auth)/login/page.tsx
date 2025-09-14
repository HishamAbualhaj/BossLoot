"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import React from "react";
const LoginPage = () => {
  return (
    <>
      <div className="text-center">
        <div className="text-2xl">Welcome back!</div>
        <div className=" text-gray-400 mt-2">
          Welcome back! Please log in to continue.
        </div>
      </div>
      <div className="flex items-center flex-col gap-4 mt-8">
        <Input
          className="w-full"
          placeholder="Email"
          onChange={() => {}}
          type="text"
        />
        <Input
          className="w-full"
          placeholder="Password"
          onChange={() => {}}
          type="password"
        />
      </div>
      <Link
        className="text-sm mt-3 block w-fit text-purple-300 hover:underline"
        href="/forgotpassword"
      >
        Forgot your password?
      </Link>
      <Button className="mt-3" title="Login" />

      <div className="text-gray-400 mt-3 text-sm flex gap-1 items-center">
        Need an account?{" "}
        <Link
          className="text-sm block w-fit text-purple-300 hover:underline"
          href="/signup"
        >
          Register
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
