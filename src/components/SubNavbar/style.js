import styled from "styled-components";
import * as palette from "../../commons/variables";

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

