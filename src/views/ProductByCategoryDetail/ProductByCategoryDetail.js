import React from 'react';
import * as S from "./style"
import Navbar from '../../components/Navbar/Navbar';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getProductByCategory as getProductByCategoryService } from "../../service/main.service"
import { getSellerDetails as getSellerDetailsService } from "../../service/main.service"
import Footer from '../../components/Footer/Footer';
import ProductSheet from "../../components/ProductSheet/ProductSheet";


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

    //console.log("seller", product.seller) //undefined
    const [seller, setSeller] = React.useState([])
    React.useEffect(()=>{
        getSellerDetailsService(product.seller).then(({data: sellerInfo})=>{
            setSeller(sellerInfo)
        })
    }, [product.seller])
    console.log("seller", seller)

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

            <ProductSheet                 
                mainImage={product.mainImage} 
                title={product.title} 
                reference={product.ref} 
                price={product.price} 
                description={product.description} 
                username={seller.username}
                userImage={seller.userImage} 
                userDescription={seller.description}
                link={`/seller/${product.seller}`} 
                productId = {product._id}
            />
            <div>
                <Footer />
            </div>
        </div>
    )

}

export default ProductByCategoryDetail;