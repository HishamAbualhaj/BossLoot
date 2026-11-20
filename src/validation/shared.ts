import * as yup from "yup";

export const email = yup
  .string()
  .trim()
  .email("Enter a valid email address")
  .required("Email is required")
  .max(254);
export const firstName = yup
  .string()
  .trim()
  .required("First name is required")
  .max(60, "Use 60 characters or fewer");
export const lastName = yup
  .string()
  .trim()
  .required("Last name is required")
  .max(60, "Use 60 characters or fewer");
export const password = yup
  .string()
  .required("Password is required")
  .min(8, "Use at least 8 characters")
  .max(128, "Use 128 characters or fewer")
  .matches(/[a-z]/, "Include a lowercase letter")
  .matches(/[A-Z]/, "Include an uppercase letter")
  .matches(/[0-9]/, "Include a number");
