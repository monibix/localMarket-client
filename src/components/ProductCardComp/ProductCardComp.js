import React from 'react';
import * as S from "./style";
import { Link } from 'react-router-dom';

function Products(props) {

    return (
        <S.ProductCard key={props._id}>
            <Link to={props.link} >
            <div className="card-image">
                <img src={props.mainImage} alt="card"/>
            </div>
            <div className="card-content">
                <h4 className="title"> {props.title} </h4>
                <h4 className="price"> {props.price}€ </h4>
            </div>
            </Link>
        </S.ProductCard>
    )
}

export default Products;