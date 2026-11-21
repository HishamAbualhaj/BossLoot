
import { useStoreCopy } from "@/i18n/use-store-copy";
import Title from "../ui/Title";
import CategoryList from "./CategoryList";
const Category = () => {
  const translate = useStoreCopy();

  return (
    <div className="relative">
      <div className="bg-gray-100 dark:bg-background px-5">
        <div className="container z-10 relative">
          <Title
            title={translate("Category")}
            subtitle="Explore our wide range of categories tailored for every gamer’s needs."
          />

          <CategoryList />
        </div>
      </div>
    </div>
  );
};

export default Category;
