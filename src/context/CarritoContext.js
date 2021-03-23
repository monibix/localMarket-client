import React from "react";

export const CarritoContext = React.createContext({})

function CarritoProvider({children}) {

    const [carrito, setCarrito] = React.useState([]);
    console.log("carrito", carrito)

    const goToShoopingCart = () => {
        //SE GUARDA ARRAY DE PRODUCTOS PERO SI REFRESCAS SE PIERDE IGUALMENTE
        const strgyOrder = JSON.stringify(carrito)
        localStorage.setItem("order", strgyOrder)

    }

    const addToCarrito = (productId) => {
        setCarrito((state) => state.concat({productId}))

        //INTENTO DE GUARDAR EN LOCALSTORAGE CUANDO SE CLICA "AÑADIR AL CARRITO" (se guarda sólo último producto. Si refrescas se pierde)
        //const strgyOrder = JSON.stringify([{productId}])
        //localStorage.setItem("order", strgyOrder) //guarda pero si refrescas desaparece igualmente
    }

    const deleteFromCarrito = (id) => {
        console.log("delete context")
        setCarrito(carrito.filter((item)=>item.productId.productID !== id ))
        
        //localStorage.removeItem('order')
    }

    const checkout = () => {
        if (carrito.length !== 0 ) {
            setCarrito([])
        } else {
            
        }
    }

    return (
        <CarritoContext.Provider value={{carrito, addToCarrito, deleteFromCarrito, checkout, goToShoopingCart }}>
            {children}
        </CarritoContext.Provider>
    )

}

export default CarritoProvider;