import styled from 'styled-components';

export const Div = styled.div`
    background-color: whitesmoke;
    display: flex;
    padding: 100px;
    .content{
        margin: 0 auto;
    }
    img {
        width: 29vw;
    }
`

export const SectionHead = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 20px 90px;
`

export const DivMigas = styled.div`
    display: flex;
    p {
        margin: auto 0;
    }
`
export const Buttons = styled.button`
    border: 2px solid #1687a7;
    background-color: #1687a7;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    padding: 1vw 1.8vw;
    font-weight: bold;
    margin: 1.5vw;
    width: 15vw;
    align-self: center;
`

export const Img = styled.img`
    width: 35vw;

`

export const Head = styled.div`
    display: flex;
    justify-content: flex-start;
    .title-section{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 40px;
        p {
            margin-top: -10px;
        }
    }
`


export const Description = styled.div`
    text-align: left;
    ${'' /* margin: 0 35vw 0 0; */}
    font-size: 1.1em;
    display: flex;
    justify-content: space-between;
    div {
        width: 50%;
        padding-right: 100px;
    }
    div h4 {
        margin-top: 20px;
        img {
            width: 40px;
            border-radius: 5px;
        }
    }
`
export const ButtonsDiv = styled.div`
    padding: 2vw;
`