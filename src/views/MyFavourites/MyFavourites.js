import React from "react";
import Favourites from "../../components/Favourites/Favourites";
import Navbar from "../../components/Navbar/Navbar";
import { Div } from "../../commons/commons.style"
import Sidebar from "../../components/Sidebar/Sidebar";
import { ProductCardContainer } from "../Products/style";
import ProductCardComp from "../../components/ProductCardComp/ProductCardComp";
import { useProducts } from '../../context/ProductsContext.utils';


function MyFavourites() {

    const { products, getMyFavourites } = useProducts();    

    React.useEffect(()=>{
        getMyFavourites()
    },[])
    console.log("products", products)

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <Div>
                <Sidebar />
                <ProductCardContainer>
                    {
                        products.map((item, key)=> {
                            return <ProductCardComp 
                                title={item.title} 
                                mainImage={item.mainImage}
                                price={item.price}
                                link={`/category/${item._id}`}/>
                        })
                        
                    }
                </ProductCardContainer>

            </Div>
        </div>
    )
}

export default MyFavourites;