
import { useStoreCopy } from "@/i18n/use-store-copy";
const CheckoutContainer = ({ children }: { children: React.ReactNode }) => {
  const translate = useStoreCopy();

  return (
    <div className="">
      <div className="max-w-[1500px] px-5 mx-auto py-10">{translate(children)}</div>
    </div>
  );
};

export default CheckoutContainer;
