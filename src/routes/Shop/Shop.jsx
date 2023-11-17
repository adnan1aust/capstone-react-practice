import { Fragment, useContext } from "react";
import { CategoryContext } from "../../contexts/categories";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import "./Shop.scss";

const Shop = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <div className="shop-container">
      {Object.keys(categories).map((title) => {
        return (
          <CategoryPreview
            title={title}
            products={categories[title]}
            key={title}
          />
        );
      })}
    </div>
  );
};

export default Shop;
