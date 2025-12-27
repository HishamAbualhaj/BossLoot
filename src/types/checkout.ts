export type Method = "credit" | "crypto" | "paypal" | null;

export type PaymentMethod =
  | { option: "credit"; data: { visaCardId: string } }
  | { option: "paypal"; data: { accountId: string } }
  | { option: "crypto"; data: { walletId: string } };

export type Paypal = {
  accountId: string;
  email: string;
  name: string;
  date: string;
};

export type Wallet = {
  walletId: string;
  name: string;
  email: string;
};
export type Card = {
  id: string;
  holder: string;
  lastFourNums: string;
  type: "visa" | "mastercard";
  isDefault: boolean;
};
