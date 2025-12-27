import { redirect } from "next/navigation";

const page = () => {
  redirect("/checkout/shipping");
};

export default page;
