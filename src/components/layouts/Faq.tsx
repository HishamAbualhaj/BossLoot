import React from "react";
import Heading from "../ui/Heading";
import FaqSection from "./FaqSection";

const Faq = () => {
  const faqs = [
    {
      question: "What is BossLoot?",
      answer:
        "BossLoot is your one-stop shop for gaming gear, accessories, and lifestyle products designed for gamers.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide. Shipping costs and delivery times vary depending on your location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, we’ll send you a tracking link via email so you can monitor its progress.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, PayPal, and secure online payment gateways.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Yes, you can return or exchange unused products within 14 days of delivery. Please check our Return Policy for details.",
    },
    {
      question: "Are the products covered by warranty?",
      answer:
        "Most of our products come with a manufacturer warranty. Warranty details are mentioned on each product page.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our support team through the contact form, live chat, or by emailing support@bossloot.com.",
    },
  ];

  return (
    <div className="dark:bg-card/50 bg-gray-100">
      <div className="container px-5 mx-auto ">
        <div className="text-center">
          <Heading
            title="Frequently Asked Questions"
            subtitle="Find quick answers to the most common questions about BossLoot."
          />
        </div>
        <div className="mt-10 border dark:border-border/50 border-gray-200 rounded-xl p-8 pt-5">
          <div className="flex flex-col gap-5">
            {faqs.map((question, i) => (
              <FaqSection key={i} question={question} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
