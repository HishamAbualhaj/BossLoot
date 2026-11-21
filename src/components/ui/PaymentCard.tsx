
import { useStoreCopy } from "@/i18n/use-store-copy";
import { cn } from "@/lib/cn";
import React, { FC, PropsWithChildren } from "react";

type PaymentCardType = FC<PropsWithChildren<PaymentCardProps>>;
interface PaymentCardProps {
  onClick: () => void;
  isActive: boolean;
}
const PaymentCard: PaymentCardType = ({ children, onClick, isActive }) => {
  const translate = useStoreCopy();

  return (
    <div
      onClick={onClick}
      className={cn(
        `${isActive && "border-primary! "}`,
        "dark:bg-card flex items-center justify-between border-2",
        "border_main p-3 rounded-lg cursor-pointer dark:hover:bg-muted",
        "hover:bg-muted-foreground/20 transition",
      )}
    >
      {translate(children)}
    </div>
  );
};

export default PaymentCard;
