import styled from 'styled-components';
import * as palette from "../../commons/variables"


export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2vw 0;
    ${'' /* align-items: center; */}
    ${'' /* justify-content: center; */}
    min-width: 15vw;
    min-height: 98vh; 
    background-color: ${palette.blackColor};
    color: whitesmoke;
    a {
        text-decoration: none;
        margin: 2.5vw 0vw;
    }
    h4 {
        color: white;
        font-family: ${palette.fontTitle};
        font-size: 1.25vw;
        ${'' /* border: 2px solid red; */}
    }
`