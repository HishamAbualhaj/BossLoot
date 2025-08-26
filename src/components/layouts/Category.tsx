import Title from "../ui/Title";
import CategoryList from "./CategoryList";
const Category = () => {
  return (
    <div className="bg-purple-900/5 relative px-5">
      <div className="pattern-box absolute bottom-0 left-0 opacity-15 w-full h-full"></div>
      <div className="max-w-[1300px] mx-auto py-20 z-10 relative">
        <Title
          title="Category"
          subtitle="Explore our wide range of categories tailored for every gamer’s needs."
        />

        <CategoryList />
      </div>
    </div>
  );
};

export default Category;
