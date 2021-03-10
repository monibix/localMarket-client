import React from 'react';
import { Div } from './styles'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useProducts } from '../../context/ProductsContext.utils';
import { useParams, Link } from 'react-router-dom';


function EditProduct() {

    const { productId } = useParams()
    console.log("productid en edit", productId)

    const { products, editProduct } = useProducts()
    console.log("product to edit", products)

    //falta formulario para info editProduct i ejecutar la función de editProduct(2 argumentos), entiendo dentro de handleSubmit
    
    // React.useEffect(()=>{
    //     editProduct(productId)
    // }, [])

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <Div>
                <Sidebar/>
                <div className="content">
                    <h1>Edit Product </h1>
                    
                    <Link to="">Delete product</Link>
                </div>
            </Div>
        </div>
    )

}

export default EditProduct;