import React from 'react';
import { Div } from "./style";
import * as S from "./style"
import { Button, AddToCardButton } from '../../commons/commons.style';
import {Link} from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext.utils";

function ProductSheet(props) {

    const { carrito, addToCarrito} = useCarrito()
    console.log("carrito", carrito)
    console.log("addtocarrito", addToCarrito)

    const handleClick = (e) => {
        e.preventDefault()
        console.log("añadido al carrito")
        const title = props.title
        console.log("title", title)
        const productID = props.productId
        const price = props.price
        const mainImage = props.mainImage
        addToCarrito({productID, title, price, mainImage})
    }
    
    return (    

            <Div>
                <div className="content">
                    <S.Head>

                        <div>
                            <S.Img src={props.mainImage} alt="product details"/>
                        </div>
                        <div className="title-section">
                            <h1> {props.title} </h1>
                            <p> Ref: {props.reference} </p>
                            <h2> {props.price} €</h2>
                            <div>
                                <AddToCardButton onClick={handleClick} >Añadir al carrito</AddToCardButton>
                            </div>
                        </div>
                    </S.Head>
                    <S.Description>
                        <div>
                            <h4>Descripción</h4>
                            <p> {props.description} </p>
                        </div>
                        <div>
                            <h4><img src={props.userImage} alt="tienda"/>&nbsp;&nbsp; Tienda {props.username} </h4>
                            <p> {props.userDescription} </p>
                            <Link to={props.link}> <Button> Saber más </Button></Link>
                        </div>
                    </S.Description>
                </div>
            </Div>
            
    )

}

export default ProductSheet;