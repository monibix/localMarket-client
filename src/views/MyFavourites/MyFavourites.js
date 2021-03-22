import React from "react";
import Favourites from "../../components/Favourites/Favourites";
import Navbar from "../../components/Navbar/Navbar";
import { Div } from "../../commons/commons.style"
import Sidebar from "../../components/Sidebar/Sidebar";
import { ProductCardContainer } from "../Products/style";
import ProductCardComp from "../../components/ProductCardComp/ProductCardComp";
import { useAuth } from "../../context/AuthContext.utils";
import { getMyFavourites as getMyFavouritesService } from "../../service/products.service"

function MyFavourites() {

    const [ favourites, setFavourites] = React.useState({})
    
    React.useEffect(()=>{
        getMyFavouritesService().then(({data: favourites})=>{
            console.log("data",favourites)
            setFavourites(favourites)
        })
    }, [])
    console.log("favourites", favourites)

    // React.useEffect(()=>{
    //     getProductsByCategoryService(category).then(({data: categoryProducts})=>{
    //         setProducts(categoryProducts)
    //     })
    // }, [category])


    return (
        <div>
            <div>
                <Navbar />
            </div>
            <Div>
                <Sidebar />
                <ProductCardContainer>
                    {/* {
                        favourites.map(()=> {
                            return <ProductCardComp title={favourites.title} />
                        })
                        
                    } */}
                </ProductCardContainer>

            </Div>
        </div>
    )
}

export default MyFavourites;