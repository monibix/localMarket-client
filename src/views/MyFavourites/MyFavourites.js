import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import * as S from "./style";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ProductCardContainer } from "../Products/style";
import ProductCardComp from "../../components/ProductCardComp/ProductCardComp";
import { useProducts } from '../../context/ProductsContext.utils';


function MyFavourites() {

    const { products, getMyFavourites } = useProducts();    

    React.useEffect(()=>{
        getMyFavourites()
    },[])

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <S.MyAreaContainer>
                <Sidebar />
                <div className="content">
                    <h3>Tus productos favoritos</h3>
                    
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
                </div>
            </S.MyAreaContainer>
        </div>
    )
}

export default MyFavourites;