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
            width: 1.75vw;
            margin: 0.8vw 0.55vw 0.8vw 0;
        }
        span {
            font-size: 0.75vw;
            margin-left: 0.5vw;
            color: blue;
            :hover {
                text-decoration: underline;
            }
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
