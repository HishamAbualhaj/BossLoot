"use client";
import { useRouter } from "next/navigation";
import { Gamepad2 } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111] text-white text-center">
      <h1 className="text-[8rem] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
        404
      </h1>

      <div className="relative mb-6 mt-2">
        <Gamepad2
          size={80}
          className="text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.7)]"
        />
        <div className="absolute inset-0 blur-2xl bg-pink-500/20 rounded-full -z-10"></div>
      </div>

      <p className="text-lg text-gray-400 max-w-md">
        Oops! Looks like this level doesn’t exist. The page you’re trying to
        reach is out of the map.
      </p>

      <button
        onClick={() => router.push("/")}
        className="mt-8 px-8 py-3 rounded-xl font-semibold cursor-pointer border border-border hover:bg-card"
      >
        Back to Home
      </button>
    </div>
  );
}
