import React from "react";
import { Div, ProductCard, Img, Button } from "./style";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation, Link } from "react-router-dom";
import qs from "qs"
import { getSearchProducts as getSearchProductsService } from "../../service/main.service"

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
    }, [])
    console.log("prodtosearch", prodToSearch)
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <Div>
                <h1>Search Products</h1>
                {/* {
                        products.map((item, key)=>{
                            return (
                                <ProductCard key={key}>
                                    <h3> {item.title} </h3>
                                    <h3> {item.price} </h3>
                                    <Img src={item.mainImage} alt="card"/>
                                    <p>{item._id}</p>
                                    <p> {item.seller} </p>
                                    <p> {item.category} </p>
                                    <Link to={`/category/${item._id}`} ><Button>View Product</Button></Link>
                                </ProductCard>
                            )
                        })
                    } */}
            </Div>
        </div>
    )
}
export default SearchProduct;