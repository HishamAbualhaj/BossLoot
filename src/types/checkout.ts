export type Method = "credit" | "crypto" | "paypal" | null;

export type PaymentMethod =
  | {
      option: Method;
      data: {
        visaCardId: string;
      };
    }
  | {
      option: Method;
      data: {
        walletId: string;
      };
    }
  | {
      option: Method;
      data: {
        accountId: string;
      };
    };

export type card = {
  id: number;
  holder: string;
  lastFourNums: string;
  type: "visa" | "mastercard";
  isDefault: boolean;
};
