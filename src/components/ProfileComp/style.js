import styled from 'styled-components';
import * as palette from "../../commons/variables"


export const Div = styled.div`
    background-color: white;
    text-align: left;
    margin-left: 10vw;
    font-family: ${palette.fontContent};
    padding-bottom: 4vw;
    .header{
        display: flex;
        img {
            width: 25vw;
        }
    .title {
        padding-left: 4vw;
        p {
            font-size: 1em;
            font-weight: 300;
        }
        img {
            width: 3vw;
        }
    }
    }
    .description {
        margin-top: 2vw;
        display: flex;
        flex-direction: column;
        max-width: 50vw;
        margin-right: 6vw;
        h4{
            font-size: 1.2vw;
            margin: 15px 0;
        }
        p {
            margin-left: 0.5vw;
        }
    }

`



// export const SectionHead = styled.section`
//     display: flex;
//     justify-content: space-between;
//     padding: 20px 90px;
// `

// export const DivMigas = styled.div`
//     display: flex;
//     p {
//         margin: auto 0;
//     }
// `