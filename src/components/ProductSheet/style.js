import styled from 'styled-components';

export const Content = styled.div`
    width: 75vw;
    border: 2px solid violet;
`

export const Head = styled.div`
    border: 2px solid blue;
    display: flex;
    justify-content: flex-start;
    .image-container {
        width: 45vw;
        height: 35vw;
        border: 1px solid black;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }   
    }
    .title-section{
        border: 2px solid red;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 3vw;
        h3 {
            font-size: 2.25vw;
            font-weight: 400;
        }
        p {
            margin-top: -0.8vw;
            font-size: 1vw;
        }
        h2 {
            font-size: 2.5vw;
            font-weight: bold;
            margin-top: -0.5vw;
        }
        .addtocart-button {
            margin: 3vw -1.5vw;
            
        }
    }
`
export const Description = styled.div`
    text-align: left;
    font-size: 1.1em;
    display: flex;
    margin-top: 2vw;
    .description{
        width: 45vw;
        border: 2px solid red;
        h4 {
            font-size: 1.5vw;
        }
        p {
            font-size: 1.25vw;

        }
    }
    .seller {
        width: 20vw;
        padding: 0 3vw 0 5vw;
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


// export const Div = styled.div`
//     background-color: whitesmoke;
//     display: flex;
//     padding: 1vw 10vw 3vw 10vw;
//     font-family: ${palette.fontContent}

//     ${'' /* .content{
//         margin: 0 auto;
//     }
//     img {
//         width: 29vw;
//     } */}
// `
