import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import * as S from "./styles";
import { Button, SubNavbar } from "../../commons/commons.style"
import { useCarrito } from "../../context/CarritoContext.utils"
import { useHistory} from "react-router";
import { Link } from "react-router-dom"
//import { getShoopingList } from "../../service/main.service";

function ShoppingCart() {
    
    //recupero order de localStorage
    const order = localStorage.getItem("order");
    console.log("order", order)

    const history = useHistory()

    const { carrito, deleteFromCarrito, checkout } = useCarrito()
    console.log("carrito", carrito)

    const handleDeleteFromList=(id)=>{
        console.log("deleted from shopping list")
        deleteFromCarrito(id)
    }

    const handleSeguirComprando = () => {
        history.push("/")
    }

    const redirectMyOrders = () => {
        history.push("/orders")
    }

    const [message, setMessage] = React.useState("")
    const [btnText, setBtnText] = React.useState("")
    const [isActive, setIsActive] = React.useState(false)
    //const [action, setAction] = React.useState(()=>{})
    const handleOrder = () => {
        if (carrito.length === 0) {
            setMessage("No tienes productos en tu cesta")
            setBtnText("Seguir comprando")
            //setIsActive(true)
            //setAction(handleSeguirComprando) //redirige directamente!!
            checkout()
        }
        else {
            setMessage("Gracias por tu compra")
            setBtnText("Seguir mi pedido")
            setIsActive(true)
            //llamar a la api para guardar pedido en modelo user-orders[] order es igual a [] 
            //localStorage.removeItem("order") //borrar localStorage una vez se ha añadido el order al modelo
            //setCarrito([]) //vaciar carrito //error carrito is not a function
            checkout()
            //setAction(redirectMyOrders)
        }
    }

    return(
        <div>

            <div>
                <Navbar />
                <SubNavbar>
                    <Link>Complementos</Link>
                    <Link>Moda</Link>
                    <Link>Muebles y Decoración</Link>
                    <Link>Joyería</Link>
                    <Link>Bebes y Niños</Link>
                    <Link>Cosmética</Link>
                </SubNavbar>
            </div>

            <S.Div>
                <div>
                {
                    carrito.map((item,key)=>{
                        return (
                            <div className="shopping-list-item" key={item.productID}>
                                <div className="top">
                                    <S.Img src={item.mainImage} />
                                    <div className="title-price">
                                        <h3>{item.title}</h3>
                                        <h3>{item.price}€</h3>
                                    </div>
                                </div>
                                <div className="button">
                                    <Button onClick={() => handleDeleteFromList(item.productID)}>Quitar de la lista</Button>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <div className="checkout">
                    <div class>
                    <h3>Total:  </h3>
                        <div className="subtotal">
                            <h5>Subtotal</h5>
                            { 
                                carrito.reduce((acc, next)=>{
                                    return (
                                        acc + next.price
                                    )
                                }, 0)
                            }
                        </div>
                        <div className="envio">
                            <h5>Envio</h5>
                            <p>2,5€</p>
                        </div>
                        <div className="total-a-pagar">
                            <h4>Total a pagar</h4>
                            <h5>                        { 
                            carrito.reduce((acc, next)=>{
                                return (
                                    ((acc + next.price)+5)
                                )
                            }, 0)
                        }</h5>
                        </div>
                    </div>
                    <div>
                        <Button onClick={handleSeguirComprando}>Seguir comprando</Button>
                        <Button onClick={handleOrder}>Realizar compra</Button>
                    </div>
                    <div>
                        {message}
                        {
                            isActive ? (
                                <Button onClick={redirectMyOrders}>{btnText}</Button>
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