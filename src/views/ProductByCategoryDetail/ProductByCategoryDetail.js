import React from 'react';
import * as S from "./style"
import Navbar from '../../components/Navbar/Navbar';
import { useParams, Link } from 'react-router-dom';
import { getProductByCategory as getProductByCategoryService } from "../../service/main.service"
import { getSellerDetails as getSellerDetailsService } from "../../service/main.service"
import Footer from '../../components/Footer/Footer';
import ProductSheet from "../../components/ProductSheet/ProductSheet";

function ProductByCategoryDetail() {

    const {productId} = useParams()
    console.log("productparams", productId)

    const [detail, setDetail] = React.useState({})

    React.useEffect(()=>{
        getProductByCategoryService(productId).then(({ data: productInfo })=>{
            setDetail(productInfo)
        })
    }, [])
    console.log("product", detail)

    // const { search } = useLocation()
    // console.log("search")

    //console.log("seller", product.seller) 
    // const [seller, setSeller] = React.useState([])
    // React.useEffect(()=>{
    //     getSellerDetailsService(product.seller).then(({data: sellerInfo})=>{
    //         console.log("useeffect", product.seller)
    //         setSeller(sellerInfo)
    //     })
    // }, [product.seller])
    // console.log("seller", seller)

    return (    
        <div>   
            <div>   
                <Navbar/>   
            </div>  

            <S.SectionHead>
                <S.DivMigas>
                    <Link to="/"><p>Home &nbsp;</p></Link>
                    <p> &#62; &nbsp;</p>
                    <Link to={`/category?category=${detail.category}`}><p>{detail.category}&nbsp;</p></Link>
                    <p> &#62; &nbsp;</p>
                    <Link to={`/category/${detail._id}`}><p>{detail.title}&nbsp;</p></Link>

                </S.DivMigas>
            </S.SectionHead>

            <ProductSheet                 
                mainImage={detail.mainImage} 
                title={detail.title} 
                reference={detail.ref} 
                price={detail.price} 
                description={detail.description} 
                username={detail.seller?.username}
                userImage={detail.seller?.userImage}
                userDescription={detail.seller?.description}
                //username={seller.username}
                // userImage={seller.userImage} 
                // userDescription={seller.description}
                link={`/seller/${detail.seller?._id}`} 
                productId = {detail._id}
            />
            <div>
                <Footer />
            </div>
        </div>
    )

}

export default ProductByCategoryDetail;