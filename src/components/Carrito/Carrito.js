import React from "react";
import { Link } from "react-router-dom";
import CarritoImg from "../../assets/carrito.png";
import * as S from "./style"

function Carrito() {

    return(
        <Link to="/carrito"><S.ImgCarrito src={CarritoImg} alt="carrito"/>0 &nbsp;&nbsp; </Link>
    )
}

export default Carrito;