import React from 'react';
import * as S from "./style";

import { Button, AddToCardButton } from '../../commons/commons.style';
import {Link, useLocation } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext.utils";
import Favourites from '../Favourites/Favourites';
import { useAuth } from '../../context/AuthContext.utils';

function ProductSheet(props) {

    const { user } = useAuth()
    console.log("user", user)
    const { addToCarrito } = useCarrito()
    const [userResponse, setUserResponse] = React.useState("")
    const [isSellerDetails, setSellerDetails ] = React.useState(true)
    const {pathname} = useLocation()

    React.useEffect(()=>{
        pathname.includes("products") ? setSellerDetails(false) : setSellerDetails(true)
    }, [pathname])

    const handleAddToCarrito = (e) => {
        if (!user.isLogged) {
            console.log("no hay user!!")
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
            <S.Div>
                <div className="content">
                    <S.Head>
                        <div>
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
                            <p style={{whiteSpace: "pre"}}> {props.description} </p>
                        </div>
                        {
                            isSellerDetails ? (
                                <div className="seller">
                                    <h4>Vendedor: </h4>
                                    <img src={props.userImage} alt="tienda"/>
                                    <h3>{props.username}</h3>
                                    <p> {props.userDescription} </p>
                                    <Link to={props.link}> <Button> Saber más </Button></Link>
                                </div>
                            ) :  (
                                <p></p>
                            )
                        }
                    </S.Description>
                </div>
            </S.Div>
            
    )

}

export default ProductSheet;








    // let initialQuantity = 0;
    // const [quantity, setQuantity] = React.useState(initialQuantity)
    // const add = () => {
    //     setQuantity(quantity + 1)
    // }
    // const substract = () => {
    //     setQuantity( quantity <= 0 ? 0 : quantity -1 )
    // }

    //     {/* <div style={{display: "flex"}}>
    //     <button onClick={substract}>Menos</button><h2>{quantity}</h2><button onClick={add}>Mas</button>
    // </div> */}