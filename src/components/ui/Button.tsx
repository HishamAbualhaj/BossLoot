import React from "react";
type buttonProps = {
  onClick?: () => void;
  className?: string;
  title: string;
  isLoading?: boolean;
  loadingText?: string;
};
const Button = ({
  onClick,
  className,
  title,
  isLoading = false,
  loadingText = 'loading ...',
}: buttonProps) => {
  return isLoading ? (
    <div
      className={`${className} bg-primary hover:bg-primary-glow transition text-white w-full py-2 text-center rounded-md cursor-pointer`}
    >
      {loadingText}
    </div>
  ) : (
    <div
      onClick={onClick}
      className={`${className} bg-primary hover:bg-primary-glow transition text-white w-full py-2 text-center rounded-md cursor-pointer`}
    >
      {title}
    </div>
  );
};

export default Button;
