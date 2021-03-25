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
    .content{
        margin: 0 auto;
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