import React from "react";
import * as S from "./style"
import { Div } from "../../commons/commons.style"
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import qs from "qs"
import { getSearchProducts as getSearchProductsService } from "../../service/main.service";
import ProductCardComp from "../../components/ProductCardComp/ProductCardComp";
import { Link } from "react-router-dom"

function SearchProduct() {

    const [prodToSearch, setProdToSearch] = React.useState([]);

    const { search } = useLocation()
    console.log("search", search)

    const {query} = qs.parse(search, { ignoreQueryPrefix: true })
    console.log("query", query)

    React.useEffect(()=>{
        getSearchProductsService(query).then(({data: searchedProducts})=>{
            console.log("searchedproduct", searchedProducts)
            setProdToSearch(searchedProducts)
        })
    }, [query])
    console.log("prodtosearch", prodToSearch)
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <S.SectionHead>
                <S.DivMigas>
                    <Link to="/"><p>Home &nbsp;</p></Link><p> &#62; &nbsp;</p><Link to={`/query?query=${query}`}><p>Search&nbsp;</p></Link>
                </S.DivMigas>
                <S.DivFilters>
                    <p>Ordena por fecha de publicación:</p>
                    <select name="" id="">
                        <option value="">Más reciente</option>
                        <option value="">Más antiguo</option>
                    </select>
                    <p>Ordena por nombre:</p>
                    <select name="" id="">
                        <option value="">A - Z</option>
                        <option value="">Z - D</option>
                    </select>
                    <p>Ordena por precio:</p>
                    <select name="" id="">
                        <option value="">Ascedendiente</option>
                        <option value="">Descendiente</option>
                    </select>
                </S.DivFilters>
            </S.SectionHead>

            <Div>
                {
                    prodToSearch.map((item,key)=>{
                        return (
                            <ProductCardComp 
                                title={item.title}
                                mainImage={item.mainImage}
                                price={item.price}
                                category={item.category}
                            />
                        )
                    })
                }
            </Div>
        </div>
    )
}
export default SearchProduct;