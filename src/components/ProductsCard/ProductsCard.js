import React from "react";
import * as S from "./style";
import { useLocation, Link } from "react-router-dom";
import qs from "qs"
import { getProductsByCategory as getProductsByCategoryService } from "../../service/main.service"
import Product1 from "../../assets/Carrousel1.jpeg"
import Product2 from "../../assets/Carrousel2.jpeg"
import Product3 from "../../assets/Carrousel3.jpeg";

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

            <S.DivCarroussel id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src={Product1} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={Product2} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={Product3} alt="Third slide" /> 
                    </div>
                </div>
                {/* <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a> */}
            </S.DivCarroussel>

            <S.SectionHead>
                <S.DivMigas>
                    <Link to="/"><p>Home &nbsp;</p></Link><p> &#62; &nbsp;</p><Link to={`/category?category=${category}`}><p>{category}&nbsp;</p></Link>
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

            <S.Div>
                {
                        products.map((item, key)=>{
                            return (
                                <S.ProductCard key={key}>
                                    <Link to={`/category/${item._id}`} >
                                    <S.Img src={item.mainImage} alt="card"/>
                                    <div>
                                        <h4 className="title"> {item.title} </h4>
                                        <h4 className="price"> {item.price} € </h4>
                                    </div>
                                    </Link>
                                </S.ProductCard>
                            )
                        })
                    }
            </S.Div>

            <div>
                <S.ExtendedButton>Ver más</S.ExtendedButton>
            </div>
        </div>
    )
}

export default ProductsCard;