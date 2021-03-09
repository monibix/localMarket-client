import React from 'react';
import { 
    createProduct as createProductService,
    getMyProducts as getMyProductsService
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



    return (
        <ProductContext.Provider value={{ products, setProducts, createProduct, getMyProducts }} >
            {children}
        </ProductContext.Provider>
    )

}

export default ProductProvider;