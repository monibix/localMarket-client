import { stringify } from "qs";
import React from "react";

export const CarritoContext = React.createContext({})

function CarritoProvider({children}) {

    const [carrito, setCarrito] = React.useState([]);
    console.log("carrito", carrito)

    const addToCarrito = (productId) => {
        setCarrito((state) => state.concat({productId}))
        const strgyOrder = JSON.stringify([{productId}])
        localStorage.setItem("order", strgyOrder) //guarda pero si refrescas desaparece igualmente
    }

    const deleteFromCarrito = (id) => {
        console.log("delete context")
        setCarrito(carrito.filter((item)=>item.productId.productID !== id ))
        localStorage.removeItem('order')
    }

    return (
        <CarritoContext.Provider value={{carrito, addToCarrito, deleteFromCarrito }}>
            {children}
        </CarritoContext.Provider>
    )

}

export default CarritoProvider;