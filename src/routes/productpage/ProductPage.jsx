import './productPage.css';
import { useReducer, useEffect } from "react";
import { ProductCard } from "../../components/product-card/ProductCard";
import { useProduct } from "../../context/product-context";
import { Filter } from "../../components/filter/Filter";
import { getSortedProducts } from "../../filter-function/index";
import { reducer } from "../../reducer/filter-reducer";
import { getIncludeProducts } from "../../filter-function/includeProduct";
import { getFilterCategoryProducts } from "../../filter-function/filterCategory";
export const ProductPage = () => {
  useEffect(() => {
    document.title = "KidsZilla | Product"
  }, [])

  const { productList } = useProduct();

  const [state, dispatch] = useReducer(reducer, {
    sortBy: "",
    includeOutOfStock: false,
    plasticToys: false,
    softToys: false,
    hardToys: false,
    flexibleToys: false,
  });

  const includeProducts = getIncludeProducts(
    productList,
    state.includeOutOfStock
  );

  const filterCategoryProducts = getFilterCategoryProducts(
    includeProducts,
    state
  );

  const sortedProducts = getSortedProducts(
    filterCategoryProducts,
    state.sortBy
  );

  let getFilteredProducts = sortedProducts;

  return (
    <div className="product-grid-container">
      <aside className="left-aside-bar">
      <Filter dispatch={dispatch} state={state} />
      </aside>
      <main className="product-main-content">
        <div className="product-list">
          {getFilteredProducts.map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};