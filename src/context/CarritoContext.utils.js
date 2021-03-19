import React from "react";

import { CarritoContext } from "./CarritoContext";

export function useCarrito() {
    return React.useContext(CarritoContext)
}