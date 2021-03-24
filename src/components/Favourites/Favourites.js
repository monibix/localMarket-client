import React from "react";
import { useParams } from "react-router-dom";
// import favorito from "../../assets/favorito.png"
// import favoritoDisable from "../../assets/favoritoDisable.png"
// import * as S from "./style";
import { manageFavourites as manageFavouritesService } from "../../service/main.service";
import { useAuth } from '../../context/AuthContext.utils.js';

// if (user.favourites.includes(productId)) {
//     return initialBtnText = removeFromFavourites
// } else{
//     return initialBtnText = addToFavourites
// }
//let initialBtnText;
let addToFavourites = "Añadir a favoritos"
let removeFromFavourites = "Quitar de favoritos"

function Favourites() {

    const { user={}, getUserInfo } = useAuth()
    const [btnText, setBtnText] = React.useState(addToFavourites)
    const {productId} = useParams()
    const [message, setMessage] = React.useState("")

    React.useEffect(()=>{
        getUserInfo(user.user)

    }, [btnText])
    console.log("getUserInfo", user)

    //segundo useeffect para definir texto boton favoritos en funcion de si está o no dicho producto al array de favoritos
    // const isFavorite = user?.favourites?.includes(productId)
    // React.useEffect(() => {
    //     const btnText = isFavorite ? "quitar de favorito" : "agregar a favorito"
    //     setBtnText(btnText)
    // }, [isFavorite, setBtnText])

    const manageFavourites = () => {
        if (user.favourites?.includes(productId)) {
            setBtnText(addToFavourites)
            setMessage("Producto añadido a tus favoritos")
        }
        if (!user.favourites?.includes(productId)) {
            setMessage("Producto quitado de tus favoritos")
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
    }

    return (
        <div>
            <button onClick={manageFavourites}>{btnText}</button>
            {message}
        </div>
    )
}
export default Favourites;