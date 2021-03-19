import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import * as S from "./styles";
import { useCarrito } from "../../context/CarritoContext.utils"

function ShoppingCart() {

    const { carrito } = useCarrito()
    console.log("carrito", carrito)



    return(
        <div>

            <div>
                <Navbar />
            </div>

            <div>
                <h1>Cesta de la compra</h1>

                {
                    carrito.map((item,key)=>{
                        return (
                            <div key={item.productID}>
                                <h2>Producto </h2>
                                <p> id: {item.productId.productID}</p>
                                <p>title: {item.productId.title}</p>
                                <p>price: {item.productId.price} </p>
                            </div>
                        )
                    })
                }

            </div>

        </div>

    )
}

export default ShoppingCart