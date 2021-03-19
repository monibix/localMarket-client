// import styled from 'styled-components';

// export const Div = styled.div`
//     background-color: whitesmoke;
//     display: flex;
//     .content{
//         margin: 0 auto;
//     }
// `

// export const ProductCardContainer = styled.div`
//     min-width: 300px;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     padding: 5px;
//     border-radius: 5px;
//     margin: 10px;
// `

// export const ProductCardDiv = styled.div`
//     width: 250px;
//     min-height: 320px;
//     display: flex;
//     flex-direction: column;
//     padding: 5px;
//     border-radius: 5px;
//     margin: 10px;
//     border: 2px solid #1687A7;
//     background-color: white;
//     img {
//         padding: 40px;
//         align-self: center;
//         justify-content: center;
//     }
//     h3 {
//         text-decoration: none;
//         color: black;
//     }
//     :hover {
//         background-color: #eee8aa;
//     }
// `

// export const Button = styled.p`
//     border: 2px solid #1687a7 ;
//     padding: 5px 10px;
//     background-color: #eff8ff;
//     border-radius: 5px;
//     margin: 2px;
//     color: black;
//     text-decoration: none;
// `

// export const SearchBar = styled.input`
//     padding: 5px 10px;
//     border: 2px solid #1687a7;
//     border-radius: 5px;
//     width: 20vw;
// `

// export const Img = styled.img`
//     width: 10vw;
//     border-bottom: 1px solid #1687A7;
// `

import styled from 'styled-components';
import { Button } from "../../commons/commons.style"

export const Div = styled.div`
    background-color: whitesmoke;
    display: flex;
    padding: 20px;
    .content{
        margin: 0 auto;
    }
`

// export const ProductCardContainer = styled.div`
//     min-width: 300px;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     padding: 5px;
//     border-radius: 5px;
//     margin: 10px;
// `

export const ProductCard = styled.div`
    width: 250px;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 2px solid #1687A7;
    background-color: white;
    margin-left: 50px;
    margin-bottom: 50px;
    img {
        align-self: center;
        justify-content: center;
    }
    h4 {
        padding-top: 10px;
        text-decoration: none;
        color: black;
    }
    div:hover {
        background-color: #1687a7;
        opacity: 0.8;
    }
    .title{
        text-align: left;
        padding: 10px 20px;

    }
    .price {
        text-align: right;
        padding: 0px 20px;
    }
`

// export const Button = styled.p`
//     border: 2px solid #1687a7 ;
//     padding: 5px 10px;
//     background-color: #eff8ff;
//     border-radius: 5px;
//     margin: 2px;
//     color: black;
//     text-decoration: none;
// `

export const SearchBar = styled.input`
    padding: 5px 10px;
    border: 2px solid #1687a7;
    border-radius: 5px;
    width: 20vw;
`

export const Img = styled.img`
    width: 10vw;
`

export const DivCarroussel = styled.div`
    img {
        width: 100%;
        height: 70vh
    }
`

export const SectionHead = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 20px 90px;
`

export const DivMigas = styled.div`
    display: flex;
    p {
        margin: auto 0;
    }
`

export const DivFilters = styled.div`
    display: flex;
    p {
        margin: auto 0;
    }
    select {
        margin: 0 20px 0 5px;
    }
`
export const ExtendedButton = styled(Button)`
    margin: 30px 0;
`
