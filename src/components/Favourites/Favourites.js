import React from "react";
import { useParams } from "react-router-dom";
import favorito from "../../assets/favorito.png"
import favoritoDisable from "../../assets/favoritoDisable.png"
import * as S from "./style";
import { manageFavourites as manageFavouritesService } from "../../service/main.service";
import { useAuth } from '../../context/AuthContext.utils.js';

let addToFavourites = "Añadir a favoritos"
let removeFromFavourites = "Quitar de favoritos"

function Favourites() {

    const { user={}, getUserInfo } = useAuth()
    const [btnText, setBtnText] = React.useState(addToFavourites)
    const {productId} = useParams()

    React.useEffect(()=>{
        getUserInfo(user.user)
    }, [btnText])
    console.log("getUserInfo", user)
    let arrayFavourites = user.favourites
    console.log("arrayFavourites", arrayFavourites)

    const manageFavourites = () => {
        if (user.favourites.includes(productId)) {
            setBtnText(addToFavourites)
        }
        if (!user.favourites.includes(productId)) {
            setBtnText(removeFromFavourites)
        }
        manageFavouritesService(productId)
    }

    return (
        <button onClick={manageFavourites}>{btnText}</button>
    )
}
export default Favourites;