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

export const Textarea = styled.textarea`
    width: 30vw;
    padding: 1vw 2vw;
    border-radius: 5px;
    border: 2px solid #1687a7;
    margin: 0.5vw;
    align-self: center;
`