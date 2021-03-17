import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`

export const Category = styled.div`
    border: 2px solid  #1687A7;
    border-radius: 5px;
    min-width: 20vw;
    min-height: 10vh;
    margin: 40px;
    padding: 20px;
    color: black;
    background-color: #1687a7;
    opacity:0.9;
    color: whitesmoke;
    a:link {
        text-decoration: none;
    }
    :hover {
        opacity: 0.8;
    }
    img {
        width: 40vw;
        height: 40vh;
    }
    h2{
        margin-top: 10px;
    }
`

export const CarrouselDiv = styled.div`
    margin: 0px auto;
    border: 2px solid black;

    img {
        width: 100%;
        height: 70vh;
    }
`