import "./CategoryPreview.scss";
import ProductCard from "../ProductCard/ProductCard";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products.map((product, index) => {
          if (index < 4) {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default CategoryPreview;
