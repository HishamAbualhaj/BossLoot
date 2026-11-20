import * as yup from "yup";
import { email, firstName, lastName } from "../shared";

// Shared account fields, ready for the future profile editor.
export const profileSchema = yup.object({ firstName, lastName, email });
