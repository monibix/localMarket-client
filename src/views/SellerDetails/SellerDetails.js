import React from 'react';
import * as S from "./style"
import Navbar from '../../components/Navbar/Navbar';
import { useParams, Link } from 'react-router-dom';
import { getSellerDetails as getSellerDetailsService } from "../../service/main.service"
import Footer from '../../components/Footer/Footer';
import ProfileComp from "../../components/ProfileComp/ProfileComp";
import ProductCardComp from "../../components/ProductCardComp/ProductCardComp";
import { useProducts } from '../../context/ProductsContext.utils';


function SellerDetails() {
    //Intento de recuperar url anterior para migas de pan
    // const history = useHistory()
    // const anterior = history.goBack
    // console.log("anterior", anterior)
    // console.log("history", history)

    const {sellerId} = useParams()

    const [seller, setSeller] = React.useState([])
    React.useEffect(()=>{
        getSellerDetailsService(sellerId).then(({data: sellerInfo})=>{
            setSeller(sellerInfo)
        })
    }, [sellerId])

    const { getRelatedUserProducts, products } = useProducts()
    React.useEffect(()=>{
        getRelatedUserProducts(sellerId)
    }, [])
    console.log("related user products", products)
    
    return (    
        <div>   
            <div>   
                <Navbar/>   
            </div>  
            <S.SectionHead>
                <S.DivMigas>
                    <Link to="/"><p>Home &nbsp;</p></Link>
                    <p> &#62; &nbsp;</p>
                </S.DivMigas>
            </S.SectionHead>

            <ProfileComp 
                username={seller.username} 
                email={seller.email}
                direction={seller.direction}
                userImage={seller.userImage}
                user={seller.user}
                description={seller.description}
                instagram={seller.instagram}
                phone={seller.phone}
                />
            <S.Div>
                <h4>Ver más productos de {seller.username}</h4>
                <div>
                    {
                        products.map((item, key)=>{ 
                            return (
                                <ProductCardComp
                                    key={item._id}
                                    id={item._id}
                                    title={item.title}
                                    mainImage={item.mainImage}
                                    price={item.price}
                                    link={`/category/${item._id}`} // si pongo link cannot read property map of undefined
                                />
                            )
                        })
                    }
                    <ProductCardComp />
                </div>    
            </S.Div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default SellerDetails;