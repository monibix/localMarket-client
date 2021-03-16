import React from "react";
import { Div, ProductCard, Img, Button } from "./style";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation, Link } from "react-router-dom";
import { qs } from "qs"
import { getProductsByCategory as getProductsByCategoryService } from "../../service/main.service"

function ProductsByCategory() {

    const [products, setProducts] = React.useState([]);

    const { search } = useLocation()
    console.log("search", search)

    const params = search.split("?").pop();
    console.log("params", params)

    // const { category } = qs(params)
    // console.log("category", category)

    const category = "joyeria"

    React.useEffect(()=>{
        getProductsByCategoryService(category).then(({data: categoryProducts})=>{
            setProducts(categoryProducts)
        })
    }, [category])

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <h1>Home</h1>
            <Div>
                <h1>Products by Category</h1>
                {
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
                    }
            </Div>
        </div>
    )
}

export default ProductsByCategory;