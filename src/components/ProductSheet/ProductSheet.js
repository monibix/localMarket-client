import React from 'react';
import * as S from "./style";
import { Button, ProductSheetContainer } from '../../commons/commons.style';
import {Link, useLocation } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext.utils";
import Favourites from '../Favourites/Favourites';
import { useAuth } from '../../context/AuthContext.utils';

function ProductSheet(props) {

    const { user } = useAuth()
    const { addToCarrito } = useCarrito()
    const [userResponse, setUserResponse] = React.useState("")
    const [isSellerDetails, setSellerDetails ] = React.useState(true)
    const {pathname} = useLocation()

    React.useEffect(()=>{
        pathname.includes("products") ? setSellerDetails(false) : setSellerDetails(true)
    }, [pathname])

    const handleAddToCarrito = (e) => {
        if (!user.isLogged) {
            setUserResponse("Regístrate para añadir productos a tu carrito")
        } else {
        const title = props.title
        const productID = props.productId
        const price = props.price
        const mainImage = props.mainImage
        const reference = props.reference
        addToCarrito({productID, title, price, mainImage, reference})
        setUserResponse(`Producto añadido al carrito`)
        }
    }

    return (    
            <ProductSheetContainer>
                <S.Content>
                    <S.Head>
                        <div className="image-container">
                            <img src={props.mainImage} alt="product details"/>
                        </div>
                        <div className="title-section">
                            <h3> {props.title} </h3>
                            <p> Ref: {props.reference} </p>
                            <h2> {props.price} €</h2>
                            <Favourites id={props.productId} />
                            {
                                isSellerDetails ? (
                                    <div className="addtocart-button">
                                    <Button onClick={handleAddToCarrito} >AÑADIR A LA CESTA</Button>
                                        {
                                            <h6 style={{color: "green"}}>{userResponse}</h6>
                                        }
                                    </div>
                                ) :  (
                                    <p></p>
                                )
                            }
                        </div>
                    </S.Head>
                    <S.Description>
                        <div className="description">
                            <h4>DESCRIPCIÓN</h4>
                            <p> {props.description} </p>
                        </div>
                        {
                            isSellerDetails ? (
                                <div className="seller">
                                    <h5>Tienda:</h5>
                                    <img src={props.userImage} alt="tienda"/>
                                    <h3>{props.username}</h3>
                                    <p> {props.userDescription} </p>
                                    <Link to={props.link}><Button> Saber más </Button></Link>
                                </div>
                            ) :  (
                                <div className="seller">
                            </div>
                            )
                        }
                    </S.Description>
                </S.Content>
            </ProductSheetContainer>
            
    )

}

export default ProductSheet;


ProductSheet.defaultProps = {
    title: "Producto no encontrado",
    price: 0,
    mainImage: "https://res.cloudinary.com/monibix/image/upload/v1616653409/LocalMarket/spevxqenmeokzifmi5w3.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    userImage: "https://res.cloudinary.com/monibix/image/upload/v1611084105/cocktailparty/default-user_yq8kve.png"
}



