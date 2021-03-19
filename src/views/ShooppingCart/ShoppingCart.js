import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import * as S from "./styles";
import { Button } from "../../commons/commons.style"
import { useCarrito } from "../../context/CarritoContext.utils"
import { useHistory } from "react-router";

function ShoppingCart() {
    
    const history = useHistory()

    const { carrito, deleteFromCarrito } = useCarrito()
    console.log("carrito", carrito)

    const handleClick=(id)=>{
        console.log("deleted from shopping list")
        deleteFromCarrito(id)
    }

    const handleSeguirComprando = () => {
        history.push("/")
    }

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
                                <S.Img src={item.productId.mainImage} alt="imagenproduct"/>
                                <p>title: {item.productId.title}</p>
                                <p>price: {item.productId.price} </p>
                                <Button onClick={() => handleClick(item.productId.productID)}>Quitar de la lista</Button>
                            </div>
                        )
                    })
                }

                <div>
                    <h3>Total:  </h3>
                    { 
                        carrito.reduce((acc, next)=>{
                            return (
                                acc + next.productId.price
                            )
                        }, 0)
                    }
                </div>

                <div>
                    <Button onClick={handleSeguirComprando}>Seguir comprando</Button>
                    <Button>Pagar</Button>
                </div>

            </div>

        </div>

    )
}

export default ShoppingCart