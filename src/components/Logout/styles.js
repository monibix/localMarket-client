import styled from 'styled-components';
import * as palette from "../../commons/variables";
import * as S from "../../commons/commons.style";


export const Button = styled(S.Button)`
border: 2px solid ${palette.goldenColor} ;
background-color: #fff;
color: ${palette.blackColor};
padding: 0.5vw 0.8vw;
    :hover {
        background-color: ${palette.goldenColor};
    }
`