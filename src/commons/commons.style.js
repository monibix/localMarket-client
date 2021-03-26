import styled from "styled-components";
import * as palette from "./variables";

export const NavbarContainer = styled.div`
    ${'' /* Fija barra navegación */}
    ${'' /* transform: translateZ(0);
    -webkit-transform: translateZ(0);
    position: fixed;
    z-index: 1000;
    width: 100%; */}
`
export const SubNavbar = styled.div`
    display: flex; 
    justify-content: space-around;
    background-color: ${palette.blackColor};
    color: #fff;
    padding: 0.8vw 13vw;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25vw;
    a {
        text-decoration: none;
        color: white;
    }
`

export const Button = styled.button`
    border: 1px solid ${palette.goldenColor} ;
    padding: 0.5vw 1.5vw;
    background-color: ${palette.blackColor};
    margin: 0 0.5vw;
    color: #fff;
    font-weight: 500;
    font-size: 1.1vw;
    font-family: 'Montserrat', sans-serif;
    &:hover{
        opacity: 0.8;
    }
`

export const Div = styled.div`
    background-color: whitesmoke;
    display: flex;
    justify-content: flex-start;
    font-family: ${palette.fontContent}
    ${'' /* .content{
        margin: 0 auto;
    } */}
`


export const ProductCardContainer = styled.div`
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 4vw 0 9vw;
`

//ESTIL DIV DE PRODUCTS BY CATEGORY DETAIL
// export const Div = styled.div`
//     background-color: white;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     margin: 0 auto;
// `

export const ProductSheetContainer = styled.div`
    background-color: white;
    display: flex;
    padding: 1vw 10vw 3vw 9vw;
    font-family: ${palette.fontContent};
`

//MIGAS DE PAN
export const SectionHead = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 2vw 9vw;
    font-family: 'Montserrat';
    font-size: 1.1vw;
`
export const DivMigas = styled.div`
    display: flex;
    a {
        text-decoration: none;
        color: black;
    }
    p {
        margin: auto 0;
    }
    p:hover {
        text-decoration: underline;
    }
    h5 {
        margin: auto 0;
        font-weight: 700;
        font-size: 1.5vw;
    }
    h5:hover {
        text-decoration: underline;
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




export const AddToCardButton = styled.button`
    border: 2px solid #f25797 ;
    padding: 5px 10px;
    background-color: #f25797;
    border-radius: 5px;
    margin: 2px;
    color: #fff;
    font-weight: bold;
    &:hover{
        opacity: 0.8;
    }
`