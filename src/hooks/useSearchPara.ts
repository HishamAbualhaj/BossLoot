import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useSearchPara = () => {
  const searchPara = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const handleSearchPara = (
    type: string,
    value: string,
    changable?: boolean
  ) => {
    const para = new URLSearchParams(searchPara.toString());
    if (!type) {
      return;
    }

    if (changable) {
      para.set(type, value);
      router.push(`${pathName}?${para.toString()}`);
      return;
    }

    const existing = para.get(type);
    let values: string[] = existing ? existing.split(",") : [];

    if (values.includes(value)) {
      values = values.filter((v) => v !== value);
    } else {
      values.push(value);
    }

    if (values.length > 0) {
      para.set(type, values.join(","));
    } else {
      para.delete(type);
    }

    router.push(`${pathName}?${para.toString()}`);
  };

  return handleSearchPara;
};
export default useSearchPara;
