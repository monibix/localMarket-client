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






// export const Div = styled.div`
//     background-color: whitesmoke;
//     display: flex;
//     .content{
//         margin: 0 auto;
//     }
// `

// export const Button = styled.button`
//     border: 2px solid #1687a7 ;
//     padding: 5px 10px;
//     background-color: #1687a7;
//     border-radius: 5px;
//     margin: 2px;
//     color: #fff;
//     font-weight: bold;
// `