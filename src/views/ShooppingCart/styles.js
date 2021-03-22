import styled from "styled-components";



export const ContainerShoppingItem = styled.img`
    width: 2vw; 
    border: 2px solid #1687A7;
    display: flex;
`

export const Img = styled.img`
    width: 5vw;
`

export const Div = styled.div`
    background-color: whitesmoke;
    display: flex;
    .shopping-list-item {
        border: 2px solid #1687a7;
        margin: 5vw;
        .top {
            display: flex;
        }
        .title-price {
            display: flex;
            flex-direction: column;
            padding: 1vw;
        }
    }
    .checkout {
        margin: 5vw;
    }
`