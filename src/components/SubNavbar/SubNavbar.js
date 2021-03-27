import React from "react";
import { SubNavbar } from "./style";
import { Link } from "react-router-dom";

function Subnavbar() {

    return (
        
    <SubNavbar>
        <Link to="/category?category=complementos">Complementos</Link>
        <Link to="/category?category=moda">Moda</Link>
        <Link to="/category?category=muebles">Muebles y Decoración</Link>
        <Link to="/category?category=joyeria">Joyería</Link>
        <Link to="/category?category=bebes">Bebes y Niños</Link>
        <Link to="/category?category=cosmetica">Cosmética</Link>
    </SubNavbar>
    )
}

export default Subnavbar;