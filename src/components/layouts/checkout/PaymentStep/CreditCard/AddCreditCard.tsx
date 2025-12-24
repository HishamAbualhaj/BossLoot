"use client";
import Input from "@/components/ui/Input";
import React, { useState } from "react";
type FormValues = {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  billingAddress: string;
};
const AddCreditCard = () => {
  const paymentFields = [
    {
      label: "Cardholder Name",
      name: "cardholderName",
      type: "text",
      placeholder: "John Doe",
    },
    {
      label: "Card Number",
      name: "cardNumber",
      type: "text",
      placeholder: "1234 5678 9012 3456",
    },
    {
      label: "Expiry Date",
      name: "expiryDate",
      type: "text",
      placeholder: "MM/YY",
    },
    {
      label: "CVV",
      name: "cvv",
      type: "text",
      placeholder: "123",
    },
    {
      label: "Billing Address",
      name: "billingAddress",
      type: "text",
      placeholder: "Same as shipping address",
    },
  ] as const;

  const [formData, setPaymentData] = useState<FormValues>({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
  });

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-2xl font-bold">Payment Details</div>
      <div className="mt-2 text-gray-400">
        Complete your payment information
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 gap-5">
          {paymentFields.map((field, i) => (
            <div key={i} className="flex flex-col gap-2">
              {field.label}
              <Input
                type="text"
                name={field.name}
                onChange={handlePaymentChange}
                placeholder={field.placeholder}
                value={formData[field.name]}
                className="py-2! w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddCreditCard;
