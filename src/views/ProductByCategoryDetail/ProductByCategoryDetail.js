import React from 'react';
import * as S from "./style";
import { SectionHead, DivMigas, SubNavbar, ProductCardContainer  } from "../../commons/commons.style"
import Navbar from '../../components/Navbar/Navbar';
import { useParams, Link } from 'react-router-dom';
import { getProductByCategory as getProductByCategoryService } from "../../service/main.service"
import { getProductsByCategory as getProductsByCategoryService } from "../../service/main.service"
import Footer from '../../components/Footer/Footer';
import ProductSheet from "../../components/ProductSheet/ProductSheet";
import ProductCardComp from "../../components/ProductCardComp/ProductCardComp";
import LeftBtnImg from "../../assets/left-btn2.png"
import RightBtnImg from "../../assets/right-btn2.png"

function ProductByCategoryDetail() {

    const {productId} = useParams()
    console.log("productparams", productId)

    const [detail, setDetail] = React.useState({})
    const [relatedProds, setRelatedProds] = React.useState([])

    React.useEffect(()=>{
        getProductByCategoryService(productId).then(({ data: productInfo })=>{
            setDetail(productInfo)
        })
    }, [])
    console.log("product", detail)

    React.useEffect(()=>{
        getProductsByCategoryService(detail?.category).then(({data: allCategoryProds})=>{
            setRelatedProds(allCategoryProds)
        })
    }, [])
    console.log("relatedPRods", relatedProds)

    //Lógica Related Products
    const [firstRelated, setFirstRelated] = React.useState(0)
    const handleClickRight = () => {
        let currentRelated  = firstRelated
        console.log("currentrelated", currentRelated)
        if (currentRelated > relatedProds.length) {
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
                    <Link to={`/category?category=${detail.category}`}><h5 style={{textTransform: "uppercase"}}>{detail.category}</h5></Link>
                    <p>&nbsp; | &nbsp;</p>
                    <Link to={`/category/${detail._id}`}><p>{detail.title}&nbsp;</p></Link>
                </DivMigas>
            </SectionHead>

            <S.ProductSheetContainer style={{backgroundColor:"red"}}>

                <ProductSheet                 
                    mainImage={detail.mainImage} 
                    title={detail.title} 
                    reference={detail.ref} 
                    price={detail.price} 
                    description={detail.description} 
                    username={detail.seller?.username}
                    userImage={detail.seller?.userImage}
                    userDescription={detail.seller?.description}
                    link={`/seller/${detail.seller?._id}`} 
                    productId = {detail._id}
                />
            </S.ProductSheetContainer>  
            <S.RelatedProductsContainer>
                <div className="related-title">
                    <h5>TAMBIÉN TE PUEDE GUSTAR</h5>
                </div>
                <div className="related-cards-container">
                    <div className="left-button">
                        <button onClick={handleClickLeft}><img src={LeftBtnImg} alt=""/></button>
                    </div>
                    <div>
                        <ProductCardComp 
                            mainImage={relatedProds[firstRelated]?.mainImage}
                            title={relatedProds[firstRelated]?.title}
                            price={relatedProds[firstRelated]?.price}
                            link={`/category/${relatedProds[firstRelated]?._id}`}
                        />
                    </div>
                    <div>
                        <ProductCardComp 
                            mainImage={relatedProds[firstRelated+1]?.mainImage}
                            title={relatedProds[firstRelated+1]?.title}
                            price={relatedProds[firstRelated+1]?.price}
                            link={`/category/${relatedProds[firstRelated+1]?._id}`}
                        />
                    </div>
                    <div>
                        <ProductCardComp 
                            mainImage={relatedProds[firstRelated+2]?.mainImage}
                            title={relatedProds[firstRelated+2]?.title}
                            price={relatedProds[firstRelated+2]?.price}
                            link={`/category/${relatedProds[firstRelated+2]?._id}`}
                        />
                    </div>
                    <div>
                        <ProductCardComp 
                            mainImage={relatedProds[firstRelated+3]?.mainImage}
                            title={relatedProds[firstRelated+3]?.title}
                            price={relatedProds[firstRelated+3]?.price}
                            link={`/category/${relatedProds[firstRelated+3]?._id}`}
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

export default ProductByCategoryDetail;