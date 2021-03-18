import React from 'react';
import * as S from "./style"
import Navbar from '../../components/Navbar/Navbar';
import { useParams, Link } from 'react-router-dom';
import { getSellerDetails as getSellerDetailsService } from "../../service/main.service"
import Footer from '../../components/Footer/Footer';
import ProfileComp from "../../components/ProfileComp/ProfileComp";
import ProductCardComp from "../../components/ProductCardComp/ProductCardComp";


function SellerDetails() {
    const {sellerId} = useParams()
    console.log("sellerId", sellerId)

    const [seller, setSeller] = React.useState([])

    React.useEffect(()=>{
        getSellerDetailsService(sellerId).then(({data: sellerInfo})=>{
            setSeller(sellerInfo)
        })
    }, [sellerId])

    console.log("sellerInfo", seller)
    
    return (    
        <div>   
            <div>   
                <Navbar/>   
            </div>  

            <S.SectionHead>
                <S.DivMigas>
                    <Link to="/"><p>Home &nbsp;</p></Link>
                    <p> &#62; &nbsp;</p>
                    {/* <Link to={`/category?category=${product.category}`}><p>{product.category}&nbsp;</p></Link>
                    <p> &#62; &nbsp;</p>
                    <Link to={`/category/${product._id}`}><p>{product.title}&nbsp;</p></Link> */}

                </S.DivMigas>
            </S.SectionHead>

            <ProfileComp 
                username={seller.username} 
                email={seller.email}
                direction={seller.direction}
                userImage={seller.userImage}
                user={seller.user}
                description={seller.description}
                />
            <S.Div>
                <h4>Ver más productos de {seller.username}</h4>
                <div>
                    {/* ProductCard de esta tienda. Falta relación modelo usuario con productos */}
                    <ProductCardComp/>
                </div>
            </S.Div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default SellerDetails;