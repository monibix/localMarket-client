import styled from 'styled-components';
import * as palette from "../../commons/variables"


export const CarrouselDiv = styled.div`
    margin: 80px auto;
`

export const MinHeightContainer = styled.div`

`



export const Div = styled.div`
    margin: -80px 0 0px 0;
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
    @media(min-width: 500) {
        justify-content: column;
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

