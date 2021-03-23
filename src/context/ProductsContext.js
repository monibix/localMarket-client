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
  //console.log("products en productProvider", products)

  const getMyProducts = async () => {
    const { data: myProducts } = await getMyProductsService();
    setProducts(myProducts);
    console.log("products en getmyproducts", myProducts);
  };

  const createProduct = async (product) => {
    const { data: newProduct } = await createProductService(product);
    setProducts((state) => state.concat(newProduct));
  };

  const getMyProduct = async (productId) => {
    console.log("entra servicio");
    const { data: product } = await getMyProductService(productId);
    setProduct(product);
  };

  const editProduct = async (productId, body) => {
    console.log("editproducservice");
    const { data: myProduct } = await editProductService(productId, body);
    console.log("myproduct", myProduct);
    setProduct(myProduct);
  };

  //const searchMyProducts = async(input) => {
  //    setProducts(products => products.filter(item=>item.title.toLowerCase().includes(input)))
  //    console.log("searchMyProducts", products)
  //}

  const cleanProduct = () => {
    setProduct({});
  };

  const deleteProduct = async (product) => {
    await deleteProductService(product);
    console.log("myproduct", product);
    setProducts(products.filter((item) => item._id !== product));
  };

  const getMyFavourites = async () => {
    const { data: favourites } = await getMyFavouritesService();
    setProducts(favourites);
    console.log("myfavoruites", favourites);
  };

  const getRelatedUserProducts = async (sellerId) => {
    const { data: sellerInfo } = await getSellerDetailsService2(sellerId);
    console.log("sellerinfo", sellerInfo.userProducts);
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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
