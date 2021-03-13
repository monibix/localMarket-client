import React from "react";

import { ProductContext } from "./ProductsContext";

export function useProducts() {
  return React.useContext(ProductContext);
}
