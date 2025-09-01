import Title from "../ui/Title";
import CategoryList from "./CategoryList";
const Category = () => {
  return (
    <div className="relative">
      <div className="bg-gray-200 dark:bg-background px-5">
        <div className="container z-10 relative">
          <Title
            title="Category"
            subtitle="Explore our wide range of categories tailored for every gamer’s needs."
          />

          <CategoryList />
        </div>
      </div>
    </div>
  );
};

export default Category;
