import React from 'react';
import * as S from "./style"
import Navbar from '../../components/Navbar/Navbar';
import { useParams, Link, useHistory } from 'react-router-dom';
import { getSellerDetails as getSellerDetailsService } from "../../service/main.service"
import Footer from '../../components/Footer/Footer';
import ProfileComp from "../../components/ProfileComp/ProfileComp";
import ProductCardComp from "../../components/ProductCardComp/ProductCardComp";


function SellerDetails() {
    //Intento de recuperar url anterior
    const history = useHistory()
    const anterior = history.goBack
    console.log("anterior", anterior)
    console.log("history", history)

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
                    {/* {
                        seller.userProducts.map((item, key)=>{ //cannot read property map of undefined
                            return (
                                <ProductCardComp
                                    id={item._id}
                                    title={item.title}
                                    mainImage={item.mainImage}
                                    price={item.price}
                                />
                            )
                        })
                    } */}
                    <ProductCardComp />
            </S.Div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default SellerDetails;