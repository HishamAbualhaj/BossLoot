import * as yup from "yup";

function passesLuhn(value: string) {
  let sum = 0;
  let double = false;
  for (let index = value.length - 1; index >= 0; index--) {
    let digit = Number(value[index]);
    if (double && (digit *= 2) > 9) digit -= 9;
    sum += digit;
    double = !double;
  }
  return sum % 10 === 0;
}

export const creditCardSchema = yup.object({
  cardholderName: yup
    .string()
    .trim()
    .required("Cardholder name is required")
    .max(100, "Use 100 characters or fewer"),
  cardNumber: yup
    .string()
    .required("Card number is required")
    .transform((value: string) => value.replace(/[ -]/g, ""))
    .matches(/^\d{13,19}$/, "Enter a valid card number")
    .test(
      "luhn",
      "Enter a valid card number",
      (value) => !value || passesLuhn(value),
    ),
  expiryDate: yup
    .string()
    .required("Expiry date is required")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use MM/YY")
    .test("future", "Your card has expired", (value) => {
      if (!value || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) return true;
      const [month, year] = value.split("/").map(Number);
      return new Date(2000 + year, month, 1) > new Date();
    }),
  cvv: yup
    .string()
    .required("Security code is required")
    .matches(/^\d{3,4}$/, "Enter 3 or 4 digits"),
  billingAddress: yup
    .string()
    .trim()
    .required("Billing address is required")
    .min(5, "Enter a complete billing address")
    .max(200, "Use 200 characters or fewer"),
});
