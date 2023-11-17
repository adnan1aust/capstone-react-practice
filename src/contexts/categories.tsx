import { createContext, useState, useEffect } from "react";
import { getCategories } from "../utils/firebase/firebase";

export const CategoryContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategories();
      console.log(categoryMap);
      setCategories(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categories };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
