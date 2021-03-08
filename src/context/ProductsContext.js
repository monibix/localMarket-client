import React from 'react';
import { createProduct } from '../service/products.service';

export const ProductContext = React.createContext({});

const initialState = [{
    title: "", 
    price: ""
}];

function ProductProvider({children}) {

    const [products, setProducts] = React.useState(initialState);
    console.log("products", products)

    return (
        <ProductContext.Provider value={{...products, setProducts}} >
            {children}
        </ProductContext.Provider>

    )

}

export default ProductProvider;