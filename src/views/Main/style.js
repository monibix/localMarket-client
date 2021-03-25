import styled from 'styled-components';
import * as palette from "../../commons/variables"


export const CarrouselDiv = styled.div`
    margin: 0px auto;
    img{
        ${'' /* height: 70vh; */}
    } 
`

export const MinHeightContainer = styled.div`

`



export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: ${palette.backgroundColor};
    .category-left {
        display: flex;
        flex-direction: column;
    }
    .category-right {
        display: flex;
        flex-direction: column;
        margin-bottom: 4vw;
    }

`

export const Category = styled.div`
    min-width: 20vw;
    min-height: 10vh;
    margin: 4vw 4vw 0 0;
    opacity:0.9;
    a:link {
        text-decoration: none;
    }
    :hover {
        opacity: 0.8;
    }
    img {
        width: 37vw;
    }
    h2{
        margin-top: 10px;
    }
`