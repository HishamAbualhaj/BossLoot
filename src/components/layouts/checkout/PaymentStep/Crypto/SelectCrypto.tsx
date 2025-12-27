"use client";
import PaymentCard from "@/components/ui/PaymentCard";
import { cn } from "@/lib/cn";
import { useCheckoutStore } from "@/store/useCheckoutStore";
import { Check, Plus, Trash2Icon, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import AddCrypto from "./AddCrypto";
import { Wallet } from "@/types/checkout";
import AddButton from "../../AddButton";

const SelectCrypto = () => {
  const { setPaymentMethod, paymentMethod } = useCheckoutStore();
  let selectedValue = null;
  if (paymentMethod && "walletId" in paymentMethod.data) {
    selectedValue = paymentMethod.data.walletId;
  }
  const [selectedWallet, setSelectedWallet] = useState<string | null>(
    selectedValue
  );

  const [modal, setModal] = useState(false);
  const cryptoWallets: Wallet[] = [
    {
      walletId: "okpf23f90jjfeiwjfwe",
      name: "Hisham Abualhaj",
      email: "hisham@gmail.com",
    },
  ];

  return (
    <div className="relative">
      <div className=" flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-primary/10">
          <Image src="/crypto.png" width={35} height={35} alt="crypto image" />
        </div>
        <h1 className="text-2xl font-bold dark:text-foreground">
          Payment Methods
        </h1>
      </div>
      <p className="text-muted-foreground ml-16">
        Select a crypto wallet for this transaction or add a new one
      </p>

      <div className="flex gap-5 mt-5 max-lg:flex-col">
        <div className="flex flex-1 flex-col gap-5">
          {cryptoWallets.length === 0 ? (
            <div className="text-center text-xl text-muted-foreground py-10">
              No Wallets Found
            </div>
          ) : (
            cryptoWallets.map((wallet) => (
              <PaymentCard
                key={wallet.walletId}
                onClick={() => {
                  setSelectedWallet(wallet.walletId);
                  setPaymentMethod({
                    option: "crypto",
                    data: {
                      walletId: wallet.walletId,
                    },
                  });
                }}
                isActive={wallet.walletId === selectedWallet}
              >
                <div className="flex gap-5 flex-1">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <p className="font-medium text-lg">Crypto</p>
                      </div>
                      {wallet.walletId === selectedWallet && (
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
                      Owner
                      <span className="font-mono tracking-wider">
                        {wallet.email}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-muted-foreground">{wallet.name}</p>
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
              </PaymentCard>
            ))
          )}
        </div>
        {modal && (
          <div className="lg:w-1/2 rounded-md shadow p-5 right-0 top-0 dark:bg-card border bg-gray-100 border_main z-10">
            <div
              onClick={() => {
                setModal(false);
              }}
              className="flex justify-end cursor-pointer"
            >
              <X />
            </div>
            <AddCrypto />
          </div>
        )}
      </div>
      {!modal && <AddButton title="Add new crypto wallet" onClick={setModal} />}
    </div>
  );
};

export default SelectCrypto;
