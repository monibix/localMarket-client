import React from 'react';
import { Div } from "./style";
import * as S from "./style"
import Navbar from '../../components/Navbar/Navbar';
import { useParams, Link } from 'react-router-dom';
import { getSellerDetails as getSellerDetailsService } from "../../service/main.service"
import Gmail from "../../assets/gmail.png"
import Footer from '../../components/Footer/Footer';
import ProductsCard from '../../components/ProductsCard/ProductsCard';


function SellerDetails() {
    const {sellerId} = useParams()
    console.log("sellerId", sellerId)

    const [seller, setSeller] = React.useState([])

    React.useEffect(()=>{
        getSellerDetailsService(sellerId).then(({data: sellerInfo})=>{
            setSeller(sellerInfo)
        })
    }, [sellerId])

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
                    {/* <Link to={`/category?category=${product.category}`}><p>{product.category}&nbsp;</p></Link>
                    <p> &#62; &nbsp;</p>
                    <Link to={`/category/${product._id}`}><p>{product.title}&nbsp;</p></Link> */}

                </S.DivMigas>
            </S.SectionHead>

            <Div>
                <div className="header">
                    <div>
                        <img src={seller.userImage} alt="seller"/>
                    </div>
                    <div className="title">
                        <h2>{seller.username}</h2>
                        <p><img src={Gmail} alt="gmail"/> {seller.direction}<br/>
                        <img src={Gmail} alt="gmail"/> {seller.email}</p>
                    </div>
                </div>  
                <div className="valores">
                    <h4>Valores</h4>
                    <p>Ecológico</p>
                    <p>Ecológico</p>
                    <p>Ecológico</p>
                    <p>Ecológico</p>
                    <p>Ecológico</p>
                </div>  
                <div className="description">
                    <h4>Descripcion</h4>
                    <p>Lorem ipsum It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                </div>
                <div>
                    <h4>Ver más productos de {seller.username}</h4>
                    <div>
                        {/* ProductCard de esta tienda. Falta relación modelo usuario con productos */}
                    </div>
                </div>
                

                {/* <h1>next</h1>
                <h2>Seller info</h2>
                <h3>{seller.email}</h3>
                <h3>{seller.direction}</h3>
                <img src={seller.userImage} alt="seller"/>
                <h3>{seller.username}</h3> */}
            </Div>
            <div>
                <Footer />
            </div>
        </div>
    )

}

export default SellerDetails;