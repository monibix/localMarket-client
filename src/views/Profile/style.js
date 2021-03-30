import styled from 'styled-components';
import * as palette from "../../commons/variables"

export const MyAreaContainer = styled.div`
    background-color: white;
    display: flex;
    padding-bottom: 1vw;
    .content{
        margin: 3vw auto;
        
        h3 {
            margin-bottom: 3vw;
            font-family: ${palette.fontContent}
        }
    }
`