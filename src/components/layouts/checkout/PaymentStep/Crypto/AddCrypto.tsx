
import { useStoreCopy } from "@/i18n/use-store-copy";
const AddCrypto = () => {
  const translate = useStoreCopy();

  return (
    <div className="text-center cursor-pointer dark:hover:bg-muted hover:bg-muted-foreground/20 border border_main rounded-md py-5 mt-5 transition">
      {translate(" Connect a crypto wallet ")}</div>
  );
};

export default AddCrypto;
