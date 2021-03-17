import React from "react";
import { Div, ProductCard, Img, Button } from "./style";
import Navbar from "../Navbar/Navbar";
import { useLocation, Link } from "react-router-dom";
import qs from "qs"
import { getProductsByCategory as getProductsByCategoryService } from "../../service/main.service"

function ProductsCard() {

    const [products, setProducts] = React.useState([]);

    const { search } = useLocation()
    console.log("search", search)

    const {category} = qs.parse(search, { ignoreQueryPrefix: true })
    console.log("category", category)

    React.useEffect(()=>{
        getProductsByCategoryService(category).then(({data: categoryProducts})=>{
            setProducts(categoryProducts)
        })
    }, [category])

    return (
        <div>
            <Div>
                {
                        products.map((item, key)=>{
                            return (
                                <ProductCard key={key}>
                                    <Link to={`/category/${item._id}`} >
                                    <Img src={item.mainImage} alt="card"/>
                                    <div>
                                        <h4> {item.title} </h4>
                                        <h4> {item.price} € </h4>
                                    </div>
                                    </Link>
                                </ProductCard>
                            )
                        })
                    }
            </Div>
        </div>
    )
}

export default ProductsCard;