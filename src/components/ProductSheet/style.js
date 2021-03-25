import styled from 'styled-components';
import * as palette from "../../commons/variables"


export const Div = styled.div`
    background-color: whitesmoke;
    display: flex;
    padding: 1vw 10vw 3vw 10vw;
    font-family: ${palette.fontContent}

    ${'' /* .content{
        margin: 0 auto;
    }
    img {
        width: 29vw;
    } */}
`


export const Head = styled.div`
    display: flex;
    justify-content: flex-start;
    img {
        width: 35vw;
        border: 1px solid black;
    }
    .title-section{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 3vw;
        h3 {
            font-size: 2.5vw;
            font-weight: 400;
        }
        p {
            margin-top: -1vw;
            font-size: 1.25vw;
        }
        h2 {
            font-size: 3vw;
            font-weight: bold;
            margin-top: -1vw;
        }
        .addtocart-button {
            margin: 3vw -1.5vw;
            
        }
    }
`
export const Description = styled.div`
    text-align: left;
    ${'' /* margin: 0 35vw 0 0; */}
    font-size: 1.1em;
    display: flex;
    justify-content: space-between;
    margin-top: 2vw;
    .description{
        width: 50%;
        h4 {
            font-size: 1.5vw;
        }
        p {
            font-size: 1.25vw;
        }
    }
    .seller {
        width: 50%;
        padding: 0 19vw 0 2vw;
        h4 {
            font-size: 1.5vw;
        }
        img {
            width: 4vw;
            margin-left: 2vw;
        }
        h3 {
            margin: 0.5vw 2vw;
            font-size: 1.25vw;
        }
        p {
            font-size: 1vw;
        }
    }
    ${'' /* div {
        width: 50%;
        padding-right: 100px;
    }
    div h4 {
        margin-top: 2vw;
        img {
            width: 40px;
            border-radius: 5px;
        }
    } */}
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
// export const Buttons = styled.button`
//     border: 2px solid #1687a7;
//     background-color: #1687a7;
//     color: #fff;
//     font-weight: bold;
//     border-radius: 5px;
//     padding: 1vw 1.8vw;
//     font-weight: bold;
//     margin: 1.5vw;
//     width: 15vw;
//     align-self: center;
// `


