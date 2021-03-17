import React from 'react';
import { Div } from "./style";
import Navbar from '../../components/Navbar/Navbar';
import { useParams, Link } from 'react-router-dom';
import { getProductByCategory as getProductByCategoryService } from "../../service/main.service"


function ProductByCategoryDetail() {
    const {productId} = useParams()
    console.log("productparams", productId)

    const [product, setProduct] = React.useState([])

    React.useEffect(()=>{
        getProductByCategoryService(productId).then(({ data: productInfo })=>{
            setProduct(productInfo)
        })
    }, [productId])

    console.log("product", product)
    
    return (    
        
        <div>   
        
            <div>   
            
                <Navbar/>   
                
            </div>  
            <h1>My Product by Category Details</h1>

            <Div>
                    
                    <h4> {product.title} </h4>
                    <h4> {product.price} </h4>
                    <h4> {product.category} </h4>
                    <h4> {product.ref} </h4>
                    <h4> {product.description} </h4>
                    <img src={product.mainImage} alt="product details"/>
                    <h4> {product.seller} </h4>
                    <Link to={`/seller/${product.seller}`}> <button> View seller profile</button></Link>
            </Div>
        </div>
    )

}

export default ProductByCategoryDetail;