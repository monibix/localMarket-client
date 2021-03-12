import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Category = styled.div`
    border: 2px solid  #1687A7;
    border-radius: 5px;
    min-width: 20vw;
    min-height: 10vh;
    margin: 40px;
    padding: 20px;
    color: black;
    a:link {
        text-decoration: none;
    }
    :hover {
        background-color: #eee8aa;
    }
`