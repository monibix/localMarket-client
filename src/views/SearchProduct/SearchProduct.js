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

    const handleFilterTitle = ({target}) => {
        console.log("filter TITLE", prodToSearch)
        const productsCopy = [...prodToSearch]
        const orderedArr = productsCopy.sort((a, b) => {
            if (target.value === "a-z") {
                console.log("az")
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
            }
            if (target.value === "z-a") {
                console.log("bz", target.value)
                if (a.title < b.title) return 1;
                if (a.title > b.title) return -1;
            }
            return a.title 
        } )
        setProdToSearch(orderedArr)
    }

    const handleFilterPrice = ({target}) => {
        console.log("filterprecio", prodToSearch)
        const productsCopy = [...prodToSearch]
        const orderedArr = productsCopy.sort((a, b)=>{
            if (target.value === "ascendiente") {
                return a.price - b.price
            }
            if (target.value === "descendiente") {
                return b.price - a.price
            }
        })
        console.log("orderedArr", orderedArr)
        setProdToSearch(orderedArr)
    }

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
                <p>Ordena por nombre:</p>
                    <select name="title" onChange={handleFilterTitle}  >
                        <option value="a-z">A - Z</option>
                        <option value="z-a">Z - A</option>
                    </select>
                    <p>Ordena por precio:</p>
                    <select name="precio" onChange={handleFilterPrice} >
                        <option value="ascendiente">Ascedendiente</option>
                        <option value="descendiente">Descendiente</option>
                    </select>
                </S.DivFilters>
            </S.SectionHead>

            <Div>
                {
                    prodToSearch.length ? (
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
                    ) : (
                        <p>{ prodToSearch.message }</p>
                    )
                }
            </Div>
        </div>
    )
}
export default SearchProduct;