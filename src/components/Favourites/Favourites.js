import React from "react";
import { useParams } from "react-router-dom";
import favoriteWhite from "../../assets/favorite-white.png"
import favoriteBlack from "../../assets/favorite-black.png"
import * as S from "./style";
import { manageFavourites as manageFavouritesService } from "../../service/main.service";
import { useAuth } from '../../context/AuthContext.utils.js';

// if (user.favourites.includes(productId)) {
//     return initialBtnText = removeFromFavourites
// } else{
//     return initialBtnText = addToFavourites
// }
//let initialBtnText;
let addToFavourites = <img src={favoriteWhite} alt="addfav"/>
let removeFromFavourites = <img src={favoriteBlack} alt="removefav"/>

function Favourites() {

    const { user={}, getUserInfo } = useAuth()
    const [btnText, setBtnText] = React.useState("")
    const {productId} = useParams()
    const [message, setMessage] = React.useState("")

    React.useEffect(()=>{
        getUserInfo(user.user)

    }, [btnText])
    console.log("getUserInfo", user)

    //segundo useeffect para definir texto boton favoritos en funcion de si está o no dicho producto al array de favoritos
    const isFavorite = user?.favourites?.includes(productId)
    React.useEffect(() => {
        const btnText = isFavorite ? removeFromFavourites : addToFavourites
        setBtnText(btnText)
    }, [isFavorite, setBtnText])

    const manageFavourites = () => {
        // if (user.favourites?.includes(productId)) {
        //     setBtnText(addToFavourites)
        //     setMessage("Producto añadido a tus favoritos")
        // }
        // if (!user.favourites?.includes(productId)) {
        //     setMessage("Producto quitado de tus favoritos")
        //     setBtnText(removeFromFavourites)
        // }
        // manageFavouritesService(productId)
        //INTENTO DE LANZAR MENSAJE SI USUARIO NO ESTÁ LOGEADO Y QUE NO PUEDA GUARDAR FAVORITOS
        if (!user.isLogged) {
            setMessage("Regístrate para guardar tus favoritos")
        } else {
            if (user.favourites?.includes(productId)) {
                setBtnText(addToFavourites)
                // setMessage("Producto quitado de tus favoritos")
            }
            if (!user.favourites?.includes(productId)) {
                setBtnText(removeFromFavourites)
                // setMessage("Producto añadido a tus favoritos")
            }
            manageFavouritesService(productId)
        }
    }

    return (
        <div>
            <S.FavoriteButton onClick={manageFavourites}>{btnText}</S.FavoriteButton>
            {message}
        </div>
    )
}
export default Favourites;