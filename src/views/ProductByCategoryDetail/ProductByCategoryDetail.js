import React from 'react';
import * as S from "./style";
import { SectionHead, DivMigas, SubNavbar  } from "../../commons/commons.style"
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