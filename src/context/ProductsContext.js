import React from "react";
import {
  createProduct as createProductService,
  getMyProducts as getMyProductsService,
  getMyProduct as getMyProductService,
  editProduct as editProductService,
  deleteProduct as deleteProductService,
  getMyFavourites as getMyFavouritesService,
} from "../service/products.service";
import { getSellerDetails as getSellerDetailsService2 } from "../service/main.service";

export const ProductContext = React.createContext({});

function ProductProvider({ children }) {
  const [products, setProducts] = React.useState([]);
  const [product, setProduct] = React.useState({});
  const [error, setError] = React.useState("")

  const getMyProducts = async () => {
    const { data: myProducts } = await getMyProductsService();
    setProducts(myProducts);
  };

  const createProduct = async (product) => {
    try {
      const { data: newProduct } = await createProductService(product);
      setProducts((state) => state.concat(newProduct));
    } catch (error) {
      setError(error.response.data.message)
    }
  };

  const getMyProduct = async (productId) => {
    const { data: product } = await getMyProductService(productId);
    setProduct(product);
  };

  const editProduct = async (productId, body) => {
    try {
      const { data: myProduct } = await editProductService(productId, body);
      setProduct(myProduct);
    } catch (error) {
      setError(error.response.data.message)
    }
  };

  const cleanProduct = () => {
    setProduct({});
  };

  const deleteProduct = async (product) => {
    await deleteProductService(product);
    setProducts(products.filter((item) => item._id !== product));
  };

  const getMyFavourites = async () => {
    const { data: favourites } = await getMyFavouritesService();
    setProducts(favourites);
  };

  const getRelatedUserProducts = async (sellerId) => {
    const { data: sellerInfo } = await getSellerDetailsService2(sellerId);
    setProducts(sellerInfo.userProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        createProduct,
        getMyProducts,
        getMyProduct,
        editProduct,
        deleteProduct,
        product,
        cleanProduct,
        getMyFavourites,
        getRelatedUserProducts,
        error
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
