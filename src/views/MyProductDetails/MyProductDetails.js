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

    const { products, getMyProduct } = useProducts();
    console.log("single product", products)

    React.useEffect(()=>{
        getMyProduct(productId)
    }, [])

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
                        mainImage={products.mainImage} 
                        title={products.title} 
                        reference={products.ref} 
                        price={products.price} 
                        description={products.description} 
                        userImage={products.userImage} 
                        userDescription={products.description}
                        link={`/profile`} 
                    />
                    <div>
                        <Link to={`/products/${products._id}/edit`}> <Button> Edit product </Button></Link>
                        <Button onClick={()=>handleDelete(products._id)}> Delete product </Button>
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