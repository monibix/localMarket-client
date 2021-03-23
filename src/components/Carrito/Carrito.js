import React from "react";
import { useHistory } from "react-router-dom";
import CarritoImg from "../../assets/carrito.png";
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
        <button onClick={handleClick}>
            <S.ImgCarrito src={CarritoImg} alt="carrito"/>{carrito.length} &nbsp;&nbsp; 
        </button>
    )
}

export default Carrito;