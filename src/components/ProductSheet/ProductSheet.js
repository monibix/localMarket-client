import React from 'react';
import { Div } from "./style";
import * as S from "./style"
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
            <Div>
                <div className="content">
                    <S.Head>
                        <div>
                            <S.Img src={props.mainImage} alt="product details"/>
                        </div>
                        <div className="title-section">
                            <h1> {props.title} </h1>
                            <p> Ref: {props.reference} </p>
                            <Favourites id={props.productId} />
                            <h2> {props.price} €</h2>
                            {
                                isSellerDetails ? (
                                    <div>
                                    <AddToCardButton onClick={handleAddToCarrito} >Añadir al carrito</AddToCardButton>
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
                        <div>
                            <h4>Descripción</h4>
                            <p style={{whiteSpace: "pre"}}> {props.description} </p>
                        </div>
                        {
                            isSellerDetails ? (
                                <div>
                                    <h4><img src={props.userImage} alt="tienda"/>&nbsp;&nbsp; Tienda {props.username} </h4>
                                    <p> {props.userDescription} </p>
                                    <Link to={props.link}> <Button> Saber más </Button></Link>
                                </div>
                            ) :  (
                                <p></p>
                            )
                        }
                    </S.Description>
                </div>
            </Div>
            
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