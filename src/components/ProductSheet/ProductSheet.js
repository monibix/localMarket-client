import React from 'react';
import { Div } from "./style";
import * as S from "./style"
import Navbar from '../../components/Navbar/Navbar';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getProductByCategory as getProductByCategoryService } from "../../service/main.service"
import { Button, AddToCardButton } from '../../commons/commons.style';
import { getSellerDetails as getSellerDetailsService } from "../../service/main.service"
import Footer from '../../components/Footer/Footer';


function ProductSheet(props) {

    // const {productId} = useParams()
    // console.log("productparams", productId)

    // const [product, setProduct] = React.useState([])

    // React.useEffect(()=>{
    //     getProductByCategoryService(productId).then(({ data: productInfo })=>{
    //         setProduct(productInfo)
    //     })
    // }, [productId])

    // console.log("product", product)

    // const { search } = useLocation()
    // console.log("search", search)

    // //const {category} = qs.parse(search, { ignoreQueryPrefix: true })
    // console.log("seller", product.seller)
    // const [seller, setSeller] = React.useState([])
    // React.useEffect(()=>{
    //     getSellerDetailsService(product.seller).then(({data: sellerInfo})=>{
    //         setSeller(sellerInfo)
    //     })
    // }, [product.seller])
    
    return (    

            <Div>
                <div className="content">
                    <S.Head>

                        <div>
                            <S.Img src={props.mainImage} alt="product details"/>
                        </div>
                        <div className="title-section">
                            <h1> {props.title} </h1>
                            <p> Ref: {props.ref} </p>
                            <h2> {props.price} €</h2>
                            <div>
                                <AddToCardButton>Añadir al carrito</AddToCardButton>
                            </div>
                        </div>
                    </S.Head>
                    <S.Description>
                        <div>
                            <h4>Descripción</h4>
                            <p> {props.description} </p>
                        </div>
                        <div>
                            <h4><img src={props.userImage} alt="tienda"/>&nbsp;&nbsp; Tienda {props.username} </h4>
                            <p> {props.description} Lorem ipsum It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </p>
                            <Link to={props.link}> <Button> Saber más </Button></Link>
                        </div>
                    </S.Description>
                </div>
            </Div>
            
    )

}

export default ProductSheet;