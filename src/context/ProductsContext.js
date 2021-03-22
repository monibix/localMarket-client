import React from 'react';
import { 
    createProduct as createProductService,
    getMyProducts as getMyProductsService, 
    getMyProduct as getMyProductService, 
    editProduct as editProductService, 
    deleteProduct as deleteProductService
} from '../service/products.service';

export const ProductContext = React.createContext({});

function ProductProvider({children}) {

    const [products, setProducts] = React.useState([]);
    const [product, setProduct] = React.useState({})
    //console.log("products en productProvider", products)

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
        // const { data: myProduct } = await getMyProductService(productId)
        // setProducts(myProduct)
        const {data: product} = await getMyProductService(productId)
        setProduct(product)
    }

    const editProduct = async(productId, body) =>{
        console.log("editproducservice")
        const { data: myProduct } = await editProductService(productId, body)
        console.log("myproduct", myProduct)
        setProduct(myProduct)
    }

    const cleanProduct = () => {
        setProduct({});
    };

    const deleteProduct = async(product) =>{
        await deleteProductService(product)
        console.log("myproduct", product)
        setProducts(products.filter((item)=>item._id !== product))
    }

    return (
        <ProductContext.Provider value={{ products, setProducts, createProduct, getMyProducts, getMyProduct, editProduct, deleteProduct, product, cleanProduct }} >
            {children}
        </ProductContext.Provider>
    )

}

export default ProductProvider;