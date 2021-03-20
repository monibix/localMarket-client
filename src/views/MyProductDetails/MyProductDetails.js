import React from 'react';
import { Button, Div } from "../../commons/commons.style"
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useProducts } from '../../context/ProductsContext.utils';
import { useParams, Link, useHistory } from 'react-router-dom';
import {deleteProduct} from "../../service/products.service";
import ProductSheet from "../../components/ProductSheet/ProductSheet";
import Footer from '../../components/Footer/Footer';


function MyProductDetails() {
    const {productId} = useParams()
    console.log("productparams", productId)
    const history = useHistory()

    //const { products, getMyProduct } = useProducts();
    const { product, getMyProduct } = useProducts()
    //console.log("single product", products)

    React.useEffect(()=>{
        getMyProduct(productId);
        
    }, [productId])

    const handleDelete =async (id) => {
        await deleteProduct(id)
        history.push("/products")
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <Div>
                <Sidebar/>
                <div>
                    <ProductSheet                 
                        mainImage={product.mainImage} 
                        title={product.title} 
                        reference={product.ref} 
                        price={product.price} 
                        description={product.description} 
                        userImage={product.userImage} 
                        userDescription={product.description}
                        link={`/profile`} 
                    />
                    <div>
                        <Link to={`/products/${product._id}/edit`}> <Button> Edit product </Button></Link>
                        <Button onClick={()=>handleDelete(product._id)}> Delete product </Button>
                    </div>
                </div>
            </Div>
            <div>
                <Footer />
            </div>

        </div>
    )

}

export default MyProductDetails;