import * as yup from "yup";
import { email } from "../shared";

export const loginSchema = yup.object({
  email,
  password: yup.string().required("Password is required"),
  rememberMe: yup.boolean().required(),
});
