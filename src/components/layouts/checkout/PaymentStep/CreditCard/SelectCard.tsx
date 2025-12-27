"use client";
import BrandLogo from "@/components/ui/BrandLogo";
import { cn } from "@/lib/cn";
import { Check, CreditCardIcon, Plus, Trash2Icon, X } from "lucide-react";
import React, { useState } from "react";
import AddCreditCard from "./AddCreditCard";
import { Card } from "@/types/checkout";
import Button from "@/components/ui/Button";
import { useCheckoutStore } from "@/store/useCheckoutStore";
import AddButton from "../../AddButton";
const SelectCard = () => {
  const [modal, setModal] = useState(false);

  const { setPaymentMethod, paymentMethod } = useCheckoutStore();
  let selectedValue = null;
  if (paymentMethod && "visaCardId" in paymentMethod.data) {
    selectedValue = paymentMethod.data.visaCardId;
  }

  const [selectedCard, setSelectedCard] = useState<string | null>(
    selectedValue
  );
  const cards: Card[] = [
    {
      id: "1236534",
      holder: "Hisham Abualhaj",
      lastFourNums: "8852",
      type: "visa",
      isDefault: true,
    },
    {
      id: "6542137",
      holder: "Hisham Abualhaj",
      lastFourNums: "1881",
      type: "mastercard",
      isDefault: false,
    },
    {
      id: "1234567",
      holder: "Hisham Abualhaj",
      lastFourNums: "8852",
      type: "visa",
      isDefault: false,
    },
  ];

  return (
    <>
      <div className="relative">
        <div className=" flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <CreditCardIcon className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold dark:text-foreground">
            Payment Methods
          </h1>
        </div>
        <p className="text-muted-foreground ml-12">
          Select a card for this transaction or add a new one
        </p>

        <div className="flex gap-5 mt-5 max-lg:flex-col">
          <div className="flex flex-1 flex-col gap-5">
            {cards.map((card) => (
              <div
                onClick={() => {
                  setSelectedCard(card.id);
                  setPaymentMethod({
                    option: "credit",
                    data: {
                      visaCardId: String(card.id),
                    },
                  });
                }}
                className={`${
                  card.id === selectedCard && "border-primary! "
                } dark:bg-card flex items-center justify-between border-2 border_main p-3 rounded-lg cursor-pointer dark:hover:bg-muted hover:bg-muted-foreground/20 transition`}
              >
                <div className="flex gap-5 flex-1">
                  <BrandLogo brand={card.type} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <p className="font-medium text-lg">{card.type}</p>
                        {card.isDefault && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium">
                            Default
                          </span>
                        )}
                      </div>
                      {card.id === selectedCard && (
                        <div
                          className={cn(
                            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200",
                            "bg-primary border-primary"
                          )}
                        >
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <CreditCardIcon className="w-4 h-4" />
                      <span className="font-mono tracking-wider">
                        •••• •••• •••• {card.lastFourNums}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-muted-foreground">{card.holder}</p>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="hover:bg-red-500/20 hover:text-red-500 cursor-pointer p-2 rounded-sm"
                      >
                        <Trash2Icon size={17} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {modal && (
            <div className="w-1/2 rounded-md shadow p-5 right-0 top-0 dark:bg-card border bg-gray-100 border_main z-10">
              <div
                onClick={() => {
                  setModal(false);
                }}
                className="flex justify-end cursor-pointer"
              >
                <X />
              </div>
              <AddCreditCard />
              <div className="flex justify-end">
                <Button className="mt-5 w-fit! px-5" title="Continue" />
              </div>
            </div>
          )}
        </div>
        {!modal && <AddButton title="Add new card" onClick={setModal} />}
      </div>
    </>
  );
};

export default SelectCard;
