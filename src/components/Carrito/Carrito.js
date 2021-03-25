import React from "react";
import { useHistory } from "react-router-dom";
import CarritoImg from "../../assets/cestaonline.png";
import * as S from "./style";
import { useCarrito } from "../../context/CarritoContext.utils";


function Carrito() {
    
    const { carrito, goToShoopingCart  } = useCarrito()

    const history = useHistory()
    const handleClick = () => {
        goToShoopingCart()
        history.push("/shoppingcart")
    }

    return(
        <S.Button onClick={handleClick}>
            <S.ImgCarrito src={CarritoImg} alt="carrito"/> 
            <h6>{carrito.length}</h6> 
        </S.Button>
    )
}

export default Carrito;