import styled from 'styled-components';
import * as palette from "../../commons/variables"

export const ProductSheetContainer = styled.div`
    margin-left: 9vw;
`

export const RelatedProductsContainer = styled.div`
    background-color: #F7F3E2;
    padding: 3vw 1vw 2vw 1vw;
    text-align: left;
    font-family: ${palette.fontTitle};
    .related-title {
        margin-left: 9vw;
        margin-bottom: 1vw;
    }
    .related-cards-container {
        padding: 0vw 0vw;
        margin-botton: 0vw;
        display: flex;
        flex-wrap: wrap;
    }
    .right-button {
        background-color: red;
        align-self: center;
    }
    .left-button {
        margin-right: 4vw;
        align-self: center;
    }
    button {
        background-color: #f7f3e2;
        border: none;
    }
    img {
        width: 2.8vw;
    }
`