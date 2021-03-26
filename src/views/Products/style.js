import styled from 'styled-components';
import * as palette from "../../commons/variables"


export const SearchBar = styled.input`
    font-family: "Montserrat";
    font-size: 1.1vw;
    border: 1px solid #000;
    padding: 0.5vw 1.5vw;
    width: 29vw;
    margin-bottom: 3vw;
`



export const MyAreaContainer = styled.div`
    background-color: white;
    display: flex;
    .content{
        margin: 3vw auto;
        h3 {
            margin-bottom: 1vw;
            font-family: ${palette.fontContent}
        }
    }
`
export const ProductCardContainer = styled.div`
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 0vw 0 13vw;
    .control-btns-container {
        ${'' /* border: 2px solid black; */}
        margin: -3vw 5.2vw 3vw 0vw;
        border-top: none;
        border-bottom: none;
        a {
            ${'' /* border: 2px solid blue; */}
        }
        button {
            width: 5.33vw;
            background-color: white;
            border: 1px solid black;
            border-top: none;
            font-family: ${palette.fontTitle};
            font-size: 0.9vw;
            :hover {
                background-color: ${palette.backgroundColor}
            }
        }
    }
`






export const AddNewProductCard = styled.div`
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
            padding: 2vw;
            width: 80%;
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
            text-decoration: none;
            color: black;
            text-align: center;

        }
    }


    ${'' /* img {
        padding: 40px;
        align-self: center;
        justify-content: center;
    } */}
    ${'' /* h3 {
        text-decoration: none;
        color: black;
    } */}
    ${'' /* :hover {
        background-color: #eee8aa;
    } */}
`

// export const Button = styled.p`
//     border: 2px solid #1687a7 ;
//     padding: 5px 10px;
//     background-color: #eff8ff;
//     border-radius: 5px;
//     margin: 2px;
//     color: black;
//     text-decoration: none;
//     :hover{
//         opacity: 0.8;
//     }
// `



// export const Img = styled.img`
//     width: 10vw;
//     border-bottom: 1px solid #1687A7;
// `



// export const MyAreaContainer = styled.div`
//     background-color: white;
//     display: flex;
//     .content{
//         margin: 0 auto;
//     }
// `