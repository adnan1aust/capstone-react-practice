import { useContext } from "react";
import { CategoryContext } from "../../contexts/categories";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <>
      {Object.keys(categories).map((title) => {
        return (
          <CategoryPreview
            title={title}
            products={categories[title]}
            key={title}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
