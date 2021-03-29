import styled from 'styled-components';
import * as palette from "../../commons/variables"

export const MyAreaContainer = styled.div`
    background-color: white;
    display: flex;
    font-family: ${palette.fontContent};
    .content{
        margin: 3vw auto;
        h3 {
            margin-bottom: 3vw;
        }
    }
`

export const Head = styled.div`
    display: flex;
    justify-content: flex-start;
    .image-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid ${palette.blackColor};
        label{
            text-align: center;
        }
        input{
            margin-top: -0.5vw;
            width: 30vw;
        }
    }
    .title-section {
        
        .field-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
    
            label {
            text-align: center;
            }
            input {
                margin-top: -0.5vw;
            }
            select {
                margin-top: -0.5vw;
            }
        }
    }
}
`

export const Description = styled.div`
    text-align: left;
    font-size: 1.1em;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2vw;
    .description-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        label {
            margin-top: 2vw;
            text-align: center;
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`
export const Label = styled.label`
    font-weight: bold;
    justify-content: center;
`

export const Input = styled.input`
    width: 23vw;
    padding: 0.5vw 1vw;
    border: 2px solid ${palette.blackColor};
    margin: 0.5vw;
    align-self: center;
`

export const Select = styled.select`
    width: 23vw;
    padding: 0.5vw 1vw;
    border: 2px solid ${palette.blackColor};
    margin: 0.5vw 3vw;
    align-self: center;
    background-color: white;
`

export const Textarea = styled.textarea`
    width: 57vw;
    padding: 1vw 2vw;
    border: 2px solid ${palette.blackColor};
    align-self: center;
`