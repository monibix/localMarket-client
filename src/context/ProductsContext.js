import React from 'react';
import { 
    createProduct as createProductService,
    getMyProducts as getMyProductsService, 
    getMyProduct as getMyProductService
} from '../service/products.service';

export const ProductContext = React.createContext({});

function ProductProvider({children}) {

    const [products, setProducts] = React.useState([]);
    console.log("products en productProvider", products)

    const getMyProducts = async() => {
        const { data : myProducts } = await getMyProductsService()
        setProducts(myProducts)
        console.log("products en getmyproducts", myProducts)
    }

    const createProduct = async(product) => {
        const { data: newProduct } = await createProductService(product);
        setProducts((state) => state.concat(newProduct))
    }

    const getMyProduct = async(productId) => {
        const { data: myProduct } = await getMyProductService(productId)
        setProducts(myProduct)
    }

    return (
        <ProductContext.Provider value={{ products, setProducts, createProduct, getMyProducts, getMyProduct }} >
            {children}
        </ProductContext.Provider>
    )

}

export default ProductProvider;