import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Div } from "../../commons/commons.style"
import Sidebar from "../../components/Sidebar/Sidebar";
import { ProductCardContainer } from "../Products/style";
import ProductCardComp from "../../components/ProductCardComp/ProductCardComp";
import { useProducts } from '../../context/ProductsContext.utils';


function MyFavourites() {

    const { products, getMyFavourites } = useProducts();    
    const [ message, setMessage ] = React.useState("")

    React.useEffect(()=>{
        getMyFavourites()
    },[])
    console.log("products", products)

    // const isFavorite = user?.favourites?.includes(productId)
    // React.useEffect(() => {
    //     const btnText = isFavorite ? "quitar de favorito" : "agregar a favorito"
    //     setBtnText(btnText)
    // }, [isFavorite, setBtnText])

    //const favoritesProducts = products?.length


    return (
        <div>
            <div>
                <Navbar />
            </div>
            <Div>
                <Sidebar />
                <ProductCardContainer>
                    {
                        products?.length ? (
                            products.map((item, key)=> {
                            return <ProductCardComp 
                                key={item._id}
                                title={item.title} 
                                mainImage={item.mainImage}
                                price={item.price}
                                link={`/category/${item._id}`}/>
                            })
                        ) : (
                            <h1>No tienes favoritos. Añade alguno aquí. </h1>
                        )
                    }
                </ProductCardContainer>

            </Div>
        </div>
    )
}

export default MyFavourites;