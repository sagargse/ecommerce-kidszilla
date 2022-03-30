export const getFilterCategoryProducts = (
    productList,
    { plasticToys, softToys, hardToys, flexibleToys }
  ) => {
    let finalFilteredProduct = [];
    if (plasticToys === true)
      finalFilteredProduct = [
        ...finalFilteredProduct,
        ...productList.filter((item) => item.categoryName === "plasticToys"),
      ];
    if (softToys === true)
      finalFilteredProduct = [
        ...finalFilteredProduct,
        ...productList.filter((item) => item.categoryName === "softToys"),
      ];
    if (hardToys === true)
      finalFilteredProduct = [
        ...finalFilteredProduct,
        ...productList.filter((item) => item.categoryName === "hardToys"),
      ];
    if (flexibleToys === true)
      finalFilteredProduct = [
        ...finalFilteredProduct,
        ...productList.filter((item) => item.categoryName === "flexibleToys"),
      ];
    if (finalFilteredProduct.length === 0) return productList;
    return finalFilteredProduct;
  };