import React from "react";
import { useParams } from "react-router-dom";
import favorito from "../../assets/favorito.png"
import favoritoDisable from "../../assets/favoritoDisable.png"
import * as S from "./style";
import { manageFavourites as manageFavouritesService } from "../../service/main.service";
import { useAuth } from '../../context/AuthContext.utils.js';

// if (user.favourites.includes(productId)) {
//     return initialBtnText = removeFromFavourites
// } else{
//     return initialBtnText = addToFavourites
// }
let initialBtnText;
let addToFavourites = "Añadir a favoritos"
let removeFromFavourites = "Quitar de favoritos"

function Favourites() {

    const { user={}, getUserInfo } = useAuth()
    const [btnText, setBtnText] = React.useState(addToFavourites)
    const {productId} = useParams()
    const [message, setMessage] = React.useState("")

    React.useEffect(()=>{
        getUserInfo(user.user).then(()=>{
            console.log("data", user.favourites) 
            //Cannot read property 'includes' of undefined
            // if (user.favourites.includes(productId)) {
            //     setBtnText(addToFavourites)
            // }
            // if (!user.favourites.includes(productId)) {
            //     setBtnText(removeFromFavourites)
            // }
        })
    }, [btnText])
    console.log("getUserInfo", user)

    const manageFavourites = () => {
        if (user.favourites.includes(productId)) {
            setBtnText(addToFavourites)
        }
        if (!user.favourites.includes(productId)) {
            setBtnText(removeFromFavourites)
        }
        manageFavouritesService(productId)
        //INTENTO DE LANZAR MENSAJE SI USUARIO NO ESTÁ LOGEADO Y QUE NO PUEDA GUARDAR FAVORITOS
        // if (!user.id) {
        //     setMessage("Regístrate para guardar tus favoritos")
        // } else {
        //     if (user.favourites.includes(productId)) {
        //         setBtnText(addToFavourites)
        //     }
        //     if (!user.favourites.includes(productId)) {
        //         setBtnText(removeFromFavourites)
        //     }
        //     manageFavouritesService(productId)
        // }
        // if (!user.id) {
        //     setMessage("Regístrate para guardar tus favoritos")
        // } else if (user.favourites.includes(productId)) {
        //     setBtnText(addToFavourites)
        //     manageFavouritesService(productId)
        // } else {
        //     setBtnText(removeFromFavourites)
        //     manageFavouritesService(productId)
        // }
    }

    return (
        <div>
            <button onClick={manageFavourites}>{btnText}</button>
            {message}
        </div>
    )
}
export default Favourites;