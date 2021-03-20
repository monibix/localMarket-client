import React from 'react';
import { Div } from "./style";
import * as S from "./style"
import { Button, AddToCardButton } from '../../commons/commons.style';
import {Link, useLocation } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext.utils";

function ProductSheet(props) {

    const locat = useLocation()
    console.log("locat", locat)
    const pathname = locat.pathname
    console.log("pathmame", pathname)
    if (pathname.includes("products")){
        console.log("true")
        //ocultar botón añadir carrito (ocultar, handleClick devuelve string "no puedes comprar tu producto", o algo así)
    }

    const { carrito, addToCarrito} = useCarrito()
    console.log("carrito", carrito)
    console.log("addtocarrito", addToCarrito)

    let initialQuantity = 0;
    const [quantity, setQuantity] = React.useState(initialQuantity)
    const add = () => {
        setQuantity(quantity + 1)
    }
    const substract = () => {
        setQuantity( quantity <= 0 ? 0 : quantity -1 )
    }

    const [userResponse, setUserResponse] = React.useState("")

    const handleClick = (e) => {
        e.preventDefault()
        console.log("añadido al carrito")
        const title = props.title
        const productID = props.productId
        const price = props.price
        const mainImage = props.mainImage
        addToCarrito({productID, title, price, mainImage})
        setUserResponse(`${quantity} añadido`)
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
                            <h2> {props.price} €</h2>
                            <div style={{display: "flex"}}>
                                <button onClick={substract}>Menos</button><h2>{quantity}</h2><button onClick={add}>Mas</button>
                            </div>
                            <div>
                                <AddToCardButton onClick={handleClick} >Añadir al carrito</AddToCardButton>
                                {
                                    <h6 style={{color: "green"}}>{userResponse}</h6>
                                }
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
                            <p> {props.userDescription} </p>
                            <Link to={props.link}> <Button> Saber más </Button></Link>
                        </div>
                    </S.Description>
                </div>
            </Div>
            
    )

}

export default ProductSheet;