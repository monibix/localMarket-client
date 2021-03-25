import styled from 'styled-components';
import * as S from "../../commons/commons.style";
import * as palette from "../../commons/variables"

export const Input = styled.input`
    font-family: "Montserrat";
    font-size: 1.1vw;
    border: 1px solid #000;
    padding: 0.5vw 1.5vw;
    width: 29vw;

`
export const Form = styled.form`
    display: flex;
    background-color: white;
    border: none;
    
`
export const Button = styled(S.Button)`
    font-size: 1.1vw;
    background-color: ${palette.goldenColor};
    padding: 0.5vw 1.5vw;
    margin: 0px 0 0 0.4vw;
`