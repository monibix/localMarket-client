import React from "react";
import { 
    saveOrder as saveOrderService
} from "../service/main.service"

export const CarritoContext = React.createContext({})

function CarritoProvider({children}) {

    const initialState = localStorage.getItem("order")?JSON.parse(localStorage.getItem("order")):[]
    console.log("initialstate", initialState)
    const [carrito, setCarrito] = React.useState(initialState);
    console.log("carrito", carrito)

    const goToShoopingCart = () => {
        const strgyOrder = JSON.stringify(carrito)
        localStorage.setItem("order", strgyOrder)
    }

    const addToCarrito = (product) => {
        setCarrito((state) => state.concat(product))
    }

    const deleteFromCarrito = (id) => {
        console.log("delete context")
        setCarrito(carrito.filter((item)=>item.productID !== id ))
    }

    const checkout = () => {
        localStorage.removeItem('order')
        setCarrito([])
        saveOrderService(carrito)
        console.log("chekout localstorage", carrito)
    }

    return (
        <CarritoContext.Provider value={{carrito, addToCarrito, deleteFromCarrito, checkout, goToShoopingCart }}>
            {children}
        </CarritoContext.Provider>
    )

}

export default CarritoProvider;