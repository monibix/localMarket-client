import styled from 'styled-components';

export const Div = styled.div`
    background-color: whitesmoke;
    display: flex;
    .content{
        margin: 0 auto;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    font-weight: bold;
    
`

export const Input = styled.input`
    width: 30vw;
    padding: 1vw 2vw;
    border-radius: 5px;
    border: 2px solid #1687a7;
    margin: 0.5vw;
    align-self: center;
`

export const Button = styled.button`
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

export const Select = styled.select`
    width: 34vw;
    padding: 1vw 2vw;
    border-radius: 5px;
    border: 2px solid #1687a7;
    margin: 0.5vw;
    align-self: center;
    background-color: white;
`

export const Textarea = styled.textarea`
    width: 30vw;
    padding: 1vw 2vw;
    border-radius: 5px;
    border: 2px solid #1687a7;
    margin: 0.5vw;
    align-self: center;
`

/*ESTILOS PRODUCT SHEET*/


export const SectionHead = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 20px 90px;
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