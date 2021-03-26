import React from 'react';
import * as S from "./style";
import { SectionHead, DivMigas, SubNavbar  } from "../../commons/commons.style"
import Navbar from '../../components/Navbar/Navbar';
import { useParams, Link } from 'react-router-dom';
import { getSellerDetails as getSellerDetailsService } from "../../service/main.service"
import Footer from '../../components/Footer/Footer';
import ProfileComp from "../../components/ProfileComp/ProfileComp";
import ProductCardComp from "../../components/ProductCardComp/ProductCardComp";
import { useProducts } from '../../context/ProductsContext.utils';
import LeftBtnImg from "../../assets/left-btn2.png";
import RightBtnImg from "../../assets/right-btn2.png"


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

    //Lógica Carroussel
    const [firstRelated, setFirstRelated] = React.useState(0)
    const handleClickRight = () => {
        let currentRelated  = firstRelated
        console.log("currentrelated", currentRelated)
        if (currentRelated > products.length) {
            setFirstRelated(0)
        } 
        // else if (currentRelated < 0) {
        //     setFirstRelated(relatedProds.length)
        // } 
        else {
            setFirstRelated(currentRelated += 1)
        }
    }
    console.log("firstrelated",firstRelated)

    const handleClickLeft = () => {
        console.log("clickleft")
        let currentRelated  = firstRelated
        console.log("currentrelated", currentRelated)
        setFirstRelated(currentRelated -= 1)
    }
    
    return (    
        <div>   
            <div>   
                <Navbar/>   
                <SubNavbar>
                    <Link>Complementos</Link>
                    <Link>Moda</Link>
                    <Link>Muebles y Decoración</Link>
                    <Link>Joyería</Link>
                    <Link>Bebes y Niños</Link>
                    <Link>Cosmética</Link>
                </SubNavbar>
            </div>  

            <SectionHead>
                <DivMigas>
                    <Link to="/"><p>Home</p></Link>
                    <p>&nbsp; &#62; &nbsp;</p>
                    <Link to={`/seller/${seller.username}`}><h5 style={{textTransform: "uppercase"}}>{seller.username}</h5></Link>
                </DivMigas>
            </SectionHead>

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
                    
            <S.RelatedProductsContainer>
                <div className="related-title">
                    <h5>VER MÁS PRODUCTOS DE {seller.username?.toUpperCase()}</h5>
                </div>
                <div className="related-cards-container">
                    <div className="left-button">
                        <button onClick={handleClickLeft}><img src={LeftBtnImg} alt=""/></button>
                    </div>
                    <div>
                        <ProductCardComp 
                            mainImage={products[firstRelated]?.mainImage}
                            title={products[firstRelated]?.title}
                            price={products[firstRelated]?.price}
                            link={`/category/${products[firstRelated]?._id}`}
                        />
                    </div>
                    <div>
                        <ProductCardComp 
                            mainImage={products[firstRelated+1]?.mainImage}
                            title={products[firstRelated+1]?.title}
                            price={products[firstRelated+1]?.price}
                            link={`/category/${products[firstRelated+1]?._id}`}
                        />
                    </div>
                    <div>
                        <ProductCardComp 
                            mainImage={products[firstRelated+2]?.mainImage}
                            title={products[firstRelated+2]?.title}
                            price={products[firstRelated+2]?.price}
                            link={`/category/${products[firstRelated+2]?._id}`}
                        />
                    </div>
                    <div>
                        <ProductCardComp 
                            mainImage={products[firstRelated+3]?.mainImage}
                            title={products[firstRelated+3]?.title}
                            price={products[firstRelated+3]?.price}
                            link={`/category/${products[firstRelated+3]?._id}`}
                        />
                    </div>
                    <div className="right-button">
                        <button onClick={handleClickRight}><img src={RightBtnImg} alt=""/></button>
                    </div>
                </div>
            </S.RelatedProductsContainer>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default SellerDetails;