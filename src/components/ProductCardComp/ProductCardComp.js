import React from 'react';
import * as S from "./style";
import { useProducts } from '../../context/ProductsContext.utils';
import { Link } from 'react-router-dom';

function Products(props) {

    const { products, getMyProducts } = useProducts();
    console.log("products en products view", products) 

    React.useEffect(()=>{
        getMyProducts()
    },[])

    return (
        <S.ProductCard key={props._id}>
            <Link to={props.link} >
            <S.Img src={props.mainImage} alt="card"/>
            <div>
                <h4 className="title"> {props.title} </h4>
                <h4 className="price"> {props.price} € </h4>
            </div>
            </Link>
        </S.ProductCard>
    )
}

export default Products;