import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import * as S from "./styles";
import { Button } from "../../commons/commons.style"
import { useCarrito } from "../../context/CarritoContext.utils"
import { useHistory} from "react-router";
import Footer from "../../components/Footer/Footer";
import DefaultImage from "../../assets/default-image_450.png"
import Subnavbar from "../../components/SubNavbar/SubNavbar";

function ShoppingCart() {
    
    const order = localStorage.getItem("order");
    console.log("order", order)

    const history = useHistory()

    const { carrito, deleteFromCarrito, checkout } = useCarrito()
    console.log("carrito", carrito)

    const handleDeleteFromList=(id)=>{
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
    const handleOrder = () => {
        if (carrito.length === 0) {
            setMessage("No tienes productos en tu cesta")
            setBtnText("Seguir comprando")
            checkout()
        }
        else {
            if (window.confirm('Estas a punto de realizar una compra. ¿Estás seguro?')) {
                setMessage("Gracias por tu compra")
                setBtnText("Seguir mi pedido")
                checkout()
                history.push("/order-confirmation")
            }
        }
    }

    return(
        <div>

            <div>
                <Navbar />
                <Subnavbar />
            </div>

            <S.Div>
                <div className="shopping-list-container">
                {
                    carrito.length ? (
                        carrito.map((item,key)=>{
                        return (
                            <div className="shopping-list-item" key={item.productID}>
                                <div className="top">
                                    <S.Img src={item.mainImage} />
                                    <div className="title-price">
                                        <h3>{item.title}</h3>
                                        <h4>{item.price}€</h4>
                                        <S.ReestyledButton onClick={() => handleDeleteFromList(item.productID)}>Quitar de la lista</S.ReestyledButton>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    ) : (
                        <div className="shopping-list-item">
                                <div className="top">
                                    <S.Img src={DefaultImage} />
                                    <div className="title-price">
                                        <h3>Todavía no tienes productos en tu cesta</h3>
                                        <h4></h4>
                                        <S.ReestyledButton onClick={() => history.push("/")}>Añadir productos</S.ReestyledButton>
                                    </div>
                                </div>
                        </div>
                    )
                }
                </div>
                <div className="checkout">
                    <div>
                        <div className="subtotal">
                            <h5>Subtotal</h5>
                            <h5>
                            { 
                                carrito.reduce((acc, next)=>{
                                    return (
                                        acc + next.price
                                    )
                                }, 0)
                            }
                            €</h5>
                        </div>
                        <div className="envio">
                            <h6>Gastos de envío</h6>
                            <h6>0 €</h6>
                        </div>
                        <div className="total-a-pagar">
                            <h4>Total a pagar</h4>
                            <h5>                        { 
                            carrito.reduce((acc, next)=>{
                                return (
                                    ((acc + next.price))
                                )
                            }, 0)
                        }€</h5>
                        </div>
                    </div>
                    <div className="checkout-buttons">
                        <Button onClick={handleSeguirComprando}>Seguir comprando</Button>
                        <Button onClick={handleOrder}>Realizar pedido</Button>
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
            <div>
                <Footer />
            </div>
        </div>

    )
}

export default ShoppingCart