import React from 'react';
import { Div } from "./style";
import * as S from "./style"
import Navbar from '../../components/Navbar/Navbar';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getProductByCategory as getProductByCategoryService } from "../../service/main.service"
import { Button, AddToCardButton } from '../../commons/commons.style';
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

    console.log("seller", product.seller)
    const [seller, setSeller] = React.useState([])
    React.useEffect(()=>{
        getSellerDetailsService(product.seller).then(({data: sellerInfo})=>{
            setSeller(sellerInfo)
        })
    }, [product.seller])
    
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

            {/* <Div>
                <div className="content">
                    <S.Head>

                        <div>
                            <S.Img src={product.mainImage} alt="product details"/>
                        </div>
                        <div className="title-section">
                            <h1> {product.title} </h1>
                            <p> Ref: {product.ref} </p>
                            <h2> {product.price} €</h2>
                            <div>
                                <AddToCardButton>Añadir al carrito</AddToCardButton>
                            </div>
                        </div>
                    </S.Head>
                    <S.Description>
                        <div>
                            <h4>Descripción</h4>
                            <p> {product.description} </p>
                        </div>
                        <div>
                            <h4><img src={seller.userImage} alt="tienda"/>&nbsp;&nbsp; Tienda {seller.username} </h4>
                            <p> {seller.description} Lorem ipsum It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </p>
                            <Link to={`/seller/${product.seller}`}> <Button> Saber más </Button></Link>
                        </div>
                    </S.Description>
                </div>
            </Div> */}

            <ProductSheet                 
                mainImage={product.mainImage} 
                title={product.title} 
                reference={product.ref} 
                price={product.price} 
                description={product.description} 
                userImage={seller.userImage} 
                userDescription={seller.description}
                link={`/seller/${product.seller}`} 
            />

            <div>
                <Footer />
            </div>
        </div>
    )

}

export default ProductByCategoryDetail;