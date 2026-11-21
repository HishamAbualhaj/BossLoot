import * as yup from "yup";
import { email, firstName, lastName } from "../shared";

export const shippingSchema = yup.object({
  firstName,
  lastName,
  email,
  address: yup
    .string()
    .trim()
    .required("Street address is required")
    .min(5, "Enter a complete street address")
    .max(200, "Use 200 characters or fewer"),
  city: yup.string().trim().required("City is required").max(80, "Use 80 characters or fewer"),
  zipCode: yup.string().trim().required("Postal code is required").max(20, "Use 20 characters or fewer"),
  country: yup.string().trim().required("Country is required").max(80, "Use 80 characters or fewer"),
});
