import React from "react";
import * as S from "./style";
import { SubNavbar, SectionHead, DivMigas, DivFilters, ProductCardContainer  } from "../../commons/commons.style"
import { useLocation, Link } from "react-router-dom";
import qs from "qs"
import { getProductsByCategory as getProductsByCategoryService } from "../../service/main.service"
// import Product1 from "../../assets/Carrousel1.jpeg"
// import Product2 from "../../assets/Carrousel2.jpeg"
// import Product3 from "../../assets/Carrousel3.jpeg";
import ProductCardComp from "../../components/ProductCardComp/ProductCardComp";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


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

    //LÓGICA FILTROS
    console.log("products", products)
    const handleFilterPrice = ({target}) => {
        console.log("filterprecio", products)
        const productsCopy = [...products]
        const orderedArr = productsCopy.sort((a, b)=>{
            if (target.value === "ascendiente") {
                return a.price - b.price
            }
            if (target.value === "descendiente") {
                return b.price - a.price
            }
        })
        console.log("orderedArr", orderedArr)
        setProducts(orderedArr)
    }
    const handleFilterTitle = ({target}) => {
        console.log("filter TITLE", products)
        const productsCopy = [...products]
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
        console.log("orderedArr", orderedArr)
        setProducts(orderedArr)
    }

    return (
        <div>
            <div>
                <Navbar />
                <SubNavbar>
                    <Link>Complementos</Link>
                    <Link>Moda</Link>
                    <Link>Muebles y Decoración</Link>
                    <Link>Joyería</Link>
                    <Link>Bebes y Niños</Link>
                    <Link>Cosmética</Link>
                </SubNavbar>
            </div>

            <SectionHead>
                <DivMigas>
                    <Link to="/"><p>Home</p></Link>
                    <p>&nbsp; &#62; &nbsp;</p>
                    <Link to={`/category?category=${category}`}><h5>{category.toUpperCase()}</h5></Link>
                </DivMigas>
                <DivFilters>
                    {/* <p>Ordena por fecha de publicación:</p>
                    <select name="" id="">
                        <option value="">Más reciente</option>
                        <option value="">Más antiguo</option>
                    </select> */}
                    <p>Ordena por nombre:</p>
                    <select name="title" onChange={handleFilterTitle}>
                        <option value="a-z">A - Z</option>
                        <option value="z-a">Z - A</option>
                    </select>
                    <p>Ordena por precio:</p>
                    <select name="precio" onChange={handleFilterPrice} >
                        <option value="ascendiente">Ascedendiente</option>
                        <option value="descendiente">Descendiente</option>
                    </select>
                </DivFilters>
            </SectionHead>

            <ProductCardContainer>
                {
                    products.map((item, key)=>{
                        return (
                            <ProductCardComp 
                                key={item._id}
                                title={item.title} 
                                price={item.price} 
                                mainImage={item.mainImage} 
                                link={`/category/${item._id}`} 
                            />
                        )
                    })
                }
            </ProductCardContainer>

            <div>
                <S.ExtendedButton>Ver más</S.ExtendedButton>
            </div>
            
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default ProductsCard;



















// import React from "react";
// //import { Div, ProductCard, Img, Button } from "./style";
// import Navbar from "../../components/Navbar/Navbar";
// //import { useLocation, Link } from "react-router-dom";
// //import qs from "qs"
// //import { getProductsByCategory as getProductsByCategoryService } from "../../service/main.service";
// import ProductsCard from "../../components/ProductsCard/ProductsCard"
// import Footer from "../../components/Footer/Footer";

// function ProductsByCategory() {

//     // const [products, setProducts] = React.useState([]);

//     // const { search } = useLocation()
//     // console.log("search", search)

//     // const {category} = qs.parse(search, { ignoreQueryPrefix: true })
//     // console.log("category", category)

//     // React.useEffect(()=>{
//     //     getProductsByCategoryService(category).then(({data: categoryProducts})=>{
//     //         setProducts(categoryProducts)
//     //     })
//     // }, [category])

//     return (
//         // <div>
//         //     <div>
//         //         <Navbar />
//         //     </div>
//         //     <h1>Home</h1>
//         //     <Div>
//         //         <h1>Products by Category</h1>
//         //         {
//         //                 products.map((item, key)=>{
//         //                     return (
//         //                         <ProductCard key={key}>
//         //                             <h3> {item.title} </h3>
//         //                             <h3> {item.price} </h3>
//         //                             <Img src={item.mainImage} alt="card"/>
//         //                             <p>{item._id}</p>
//         //                             <p> {item.seller} </p>
//         //                             <p> {item.category} </p>
//         //                             <Link to={`/category/${item._id}`} ><Button>View Product</Button></Link>
//         //                         </ProductCard>
//         //                     )
//         //                 })
//         //             }
//         //     </Div>
//         // </div>
//         <div>
//         <Navbar/>
//         <ProductsCard/>
//         <Footer />
//         </div>
//     )
// }

// export default ProductsByCategory;