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

    const editProduct = async(productId, body) =>{
        const { data: myProduct } = await editProductService(productId, body)
        console.log("myproduct", myProduct)
        setProducts(myProduct)
    }

    const deleteProduct = async(product) =>{
        const { data: myProduct } = await deleteProductService(product)
        console.log("myproduct", myProduct)
        const productsCopy = [...products]
        setProducts(productsCopy.filter((item)=>item._id !== myProduct))
    }

    // const deleteAlumni = (al) => {
    //     const alumnisCopy = [...alumnis]
    //     setAlumnis(alumnisCopy.filter((item)=>item.id !== al))
    // }

    return (
        <ProductContext.Provider value={{ products, setProducts, createProduct, getMyProducts, getMyProduct, editProduct, deleteProduct }} >
            {children}
        </ProductContext.Provider>
    )

}

export default ProductProvider;