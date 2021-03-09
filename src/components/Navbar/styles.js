import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:5px 20px;
    border-bottom: 2px solid grey;
    box-shadow: 0.5px 0.5px 0.5px 0.5px #253238;
`

export const Logo = styled.img`
    width: 50px;
` 

export const Button = styled.button`
    border: 2px solid #1687a7 ;
    padding: 5px 10px;
    background-color: #1687a7;
    border-radius: 5px;
    margin: 2px;
    color: #fff;
    font-weight: bold;
`

export const Div = styled.div`
    /*border: 2px solid red */;
    .searchbar { /* No coge estilo className searchbar */
        margin:-30px;
        width: 300px;
        background-color: red;
    }
`
