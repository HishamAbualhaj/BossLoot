import React from "react";
import visa from "@/assets/visa.svg";
import binance from "@/assets/binance.svg";
import paypal from "@/assets/paypal.svg";
import mastercard from "@/assets/mastercard.svg";
import Image from "next/image";
import Heading from "../ui/Heading";
const Payment = () => {
  const options = [
    { image: visa, width: 100, height: 100 },
    { image: binance, width: 200, height: 200 },
    { image: paypal, width: 200, height: 200 },
    { image: mastercard, width: 100, height: 100 },
  ];
  const paymentFeatures = [
    {
      title: "SSL Encryption",
      subtitle: "All transactions are encrypted end-to-end.",
    },
    {
      title: "PCI-DSS Compliance",
      subtitle: "Meets global security standards for handling payment data.",
    },
    {
      title: "Tokenization",
      subtitle: "Sensitive card details replaced with secure tokens.",
    },
    {
      title: "Fraud Detection",
      subtitle: "Real-time monitoring of suspicious activities.",
    },
    {
      title: "3D Secure / OTP",
      subtitle: "Extra authentication step for safer payments.",
    },
    {
      title: "Secure Checkout",
      subtitle: "Hosted checkout pages to prevent data leaks.",
    },
    {
      title: "Data Privacy",
      subtitle: "No storing of raw card details.",
    },
    {
      title: "Multi-Currency Support",
      subtitle: "Pay in different currencies securely.",
    },
    {
      title: "Instant Notifications",
      subtitle: "Email, SMS, or onsite alerts for each transaction.",
    },
    {
      title: "Refund & Dispute Handling",
      subtitle: "Safe process for chargebacks or cancellations.",
    },
    {
      title: "Audit Logs",
      subtitle: "Every transaction logged for transparency.",
    },
    {
      title: "Uptime & Reliability",
      subtitle: "High availability with failover systems.",
    },
  ];

  return (
    <div className="text-center xl:py-15 py-12 px-5">
      <Heading
        title="Payment Options"
        subtitle="Shop with confidence using your preferred payment method. All
        transactions are secured with industry-leading encryption."
      />


      <div className="max-w-[1400px] mx-auto">
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-10 mt-10  border-t border-b dark:border-border border-gray-500/20">
          {options.map((item, i) => (
            <div
              key={i}
              className="boder border-border p-10 flex justify-center rounded-lg"
            >
              <Image
                width={item.width}
                height={item.height}
                alt=""
                src={item.image}
              />
            </div>
          ))}
        </div>
        <div className="mt-10 xl:text-4xl text-2xl">
          Secure payments, fearless shopping.
        </div>
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-4 mt-10">
          {paymentFeatures.map((item, i) => (
            <div
              key={i}
              className=" dark:border-border border-gray-400/25 dark:bg-card/80 bg-gray-400/15 border p-5 rounded-md"
            >
              <div className="text-lg"> {item.title}</div>

              <div className="mt-3 dark:text-muted-foreground text-black/70">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;
