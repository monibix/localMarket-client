import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import * as S from "./styles";
import { Button } from "../../commons/commons.style"
import { useCarrito } from "../../context/CarritoContext.utils"
import { useHistory } from "react-router";

function ShoppingCart() {
    
    //recupero order de localStorage
    const order = localStorage.getItem("order");
    console.log("order", order)

    const history = useHistory()

    const { carrito, setCarrito, deleteFromCarrito } = useCarrito()
    console.log("carrito", carrito)

    const handleClick=(id)=>{
        console.log("deleted from shopping list")
        deleteFromCarrito(id)
    }

    const handleSeguirComprando = () => {
        history.push("/")
    }

    const redirectHome = () => {
        history.push("/")
    }

    const [message, setMessage] = React.useState("")
    const [btnText, setBtnText] = React.useState("")
    const [isActive, setIsActive] = React.useState(false)
    const [action, setAction] = React.useState()
    const handleOrder = () => {
        if (carrito.length === 0) {
            setMessage("No tienes productos en tu cesta")
            setBtnText("Ver productos")
            setIsActive(true)
            //setAction() //redirige directamente!!
        }
        else {
            setMessage("Gracias por tu compra")
            setBtnText("Seguir mi pedido")
            setIsActive(true)
            //llamar a la api para guardar pedido en modelo user-orders[] order es igual a [] 
            localStorage.removeItem("order") //borrar localStorage una vez se ha añadido el order al modelo
            setCarrito([]) //vaciar carrito //error carrito is not a function
        }
    }

    return(
        <div>

            <div>
                <Navbar />
            </div>

            <S.Div>
                <div>
                {
                    carrito.map((item,key)=>{
                        return (
                            <div className="shopping-list-item" key={item.productID}>
                                <div className="top">
                                    <S.Img src={item.productId.mainImage} />
                                    <div className="title-price">
                                        <h3>{item.productId.title}</h3>
                                        <h3>{item.productId.price}€</h3>
                                    </div>
                                </div>
                                <div className="button">
                                    <Button onClick={() => handleClick(item.productId.productID)}>Quitar de la lista</Button>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <div className="checkout">
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
                        <Button onClick={handleOrder}>Pagar</Button>
                    </div>
                    <div>
                        {message}
                        {
                            isActive ? (
                                <Button onClick={()=>action()}>{btnText}</Button>
                            ) : (
                                <p></p>
                            )
                        }
                    </div>
                </div>

            </S.Div>

        </div>

    )
}

export default ShoppingCart