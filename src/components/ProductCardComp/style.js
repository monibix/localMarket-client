import styled from 'styled-components';
import * as palette from "../../commons/variables"

export const ProductCard = styled.div`
    width: 16vw;
    height: 20vw;
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    background-color: white;
    margin: 0 5.2vw 3vw 0vw;
    border: 1px solid #000;
    :hover {
        background-color: #F8F8FF;
    }
    a{
        text-decoration: none;
        color: black;
        }
    .card-image{
        height: 15vw;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }
    }
    .card-content {
        font-family: ${palette.fontContent};
        text-align: left;
        padding: 1.1vw 1vw;
        height: 25%;
        
        .title{
            font-size: 1vw;
            font-weight: 400;
        }
        .price {
            font-size: 1.15vw;
        }
    }
    
`
