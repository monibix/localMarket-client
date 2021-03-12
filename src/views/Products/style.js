import styled from 'styled-components';

export const Div = styled.div`
    background-color: whitesmoke;
    display: flex;
    .content{
        margin: 0 auto;
    }
`

export const ProductCardContainer = styled.div`
    min-width: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5px;
    border-radius: 5px;
    margin: 10px;
`

export const ProductCard = styled.div`
    width: 250px;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 5px;
    margin: 10px;
    border: 2px solid #1687A7;
    background-color: white;
    img {
        padding: 40px;
        align-self: center;
        justify-content: center;
    }
    h3 {
        text-decoration: none;
        color: black;
    }
    :hover {
        background-color: #eee8aa;
    }
`

export const Button = styled.p`
    border: 2px solid #1687a7 ;
    padding: 5px 10px;
    background-color: #eff8ff;
    border-radius: 5px;
    margin: 2px;
    color: black;
    text-decoration: none;
`

export const SearchBar = styled.input`
    padding: 5px 10px;
    border: 2px solid #1687a7;
    border-radius: 5px;
    width: 20vw;
`