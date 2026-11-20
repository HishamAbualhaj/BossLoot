import * as yup from "yup";
import { email } from "../shared";
export const forgotPasswordSchema = yup.object({ email });
