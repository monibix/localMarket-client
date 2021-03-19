import React from "react";
import { Link } from "react-router-dom";
import CarritoImg from "../../assets/carrito.png";
import * as S from "./style";
import { useCarrito } from "../../context/CarritoContext.utils";


function Carrito() {

    const { carrito } = useCarrito()
    console.log("carrito", carrito)

    return(
        <Link to="/shoppingcart"><S.ImgCarrito src={CarritoImg} alt="carrito"/>{carrito.length} &nbsp;&nbsp; </Link>
    )
}

export default Carrito;