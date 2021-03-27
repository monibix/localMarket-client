import styled from 'styled-components';

export const Content = styled.div`
    width: 75vw;
`

export const Head = styled.div`
    display: flex;
    justify-content: flex-start;
    .image-container {
        width: 45vw;
        height: 35vw;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }   
    }
    .title-section{
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
        h4 {
            font-size: 1.5vw;
        }
        p {
            font-size: 1.25vw;

        }
    }
    .seller {
        width: 30vw;
        padding: 0 3vw 0 5vw;

        white-space:nowrap; 
        overflow: hidden;
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
