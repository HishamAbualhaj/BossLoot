import * as yup from "yup";
import { email, firstName, lastName, password } from "../shared";

export const registerSchema = yup.object({
  firstName, lastName, email, password,
  confirmPassword: yup.string().required("Confirm your password").oneOf([yup.ref("password")], "Passwords must match"),
  acceptTerms: yup.boolean().oneOf([true], "Accept the terms to continue").required(),
});
