import React from 'react';
import { Div } from "./style";
import * as S from "./style"
import Navbar from '../../components/Navbar/Navbar';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getProductByCategory as getProductByCategoryService } from "../../service/main.service"
import qs from "qs";


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

    const { search } = useLocation()
    console.log("search", search)

    const {category} = qs.parse(search, { ignoreQueryPrefix: true })
    console.log("category", product.category)
    
    return (    
        <div>   
            <div>   
                <Navbar/>   
            </div>  

            <S.SectionHead>
                <S.DivMigas>
                    <Link to="/"><p>Home &nbsp;</p></Link>
                    <p> &#62; &nbsp;</p>
                    <Link to={`/category?category=${product.category}`}><p>{product.category}&nbsp;</p></Link>
                    <p> &#62; &nbsp;</p>
                    <Link to={`/category/${product._id}`}><p>{product.title}&nbsp;</p></Link>

                </S.DivMigas>
            </S.SectionHead>

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