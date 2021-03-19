import React from "react";

export const CarritoContext = React.createContext({})

function CarritoProvider({children}) {

    const [carrito, setCarrito] = React.useState([]);
    console.log("carrito", carrito)

    const addToCarrito = (productId) => {
        setCarrito((state) => state.concat({productId}))
    }

    const getProductDetails = () => {

    }


    return (
        <CarritoContext.Provider value={{carrito, addToCarrito }}>
            {children}
        </CarritoContext.Provider>
    )

}

export default CarritoProvider;