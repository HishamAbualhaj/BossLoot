import React from "react";

type inputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  type: string;
  value: string | number;
  name: string;
};
const Input = ({
  onChange,
  placeholder,
  className,
  type,
  value,
  name,
}: inputProps) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      name={name}
      className={`${className} rounded-md px-3 sm:py-3 py-2 max-sm:text-sm dark:text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50  pl-4 w-64 dark:bg-secondary/50 bg-gray-200 text-black dark:border-secondary border-gray-300 focus:border-gaming-purple border`}
    />
  );
};

export default Input;
