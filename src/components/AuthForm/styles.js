import styled from 'styled-components';
import { Button } from "../../commons/commons.style";
import * as palette from "../../commons/variables"

export const LoginSignupContainer = styled.div`
    border: 2px solid red;
    background-color: ${palette.backgroundColor};
    min-height: 65vh;
    div {
      margin: 3vw 30vw;
      background-color: white;
      opacity: 1;
      h3 {
        padding: 2vw 0vw 1vw;
        font-size: 2vw;
        
      }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    p {
      margin-top: -1vw;
      font-size: 0.8vw;
    }
`
export const Label = styled.label`
    font-weight: bold;
    justify-content: center;
`

export const Input = styled.input`
    width: 23vw;
    padding: 0.5vw 1vw;
    border: 2px solid ${palette.blackColor};
    margin: 0.5vw 0vw 1vw;
    align-self: center;
`

export const StyledButton = styled(Button)`
    margin: 2vw;
    width: 10vw;
    align-self: center;
`