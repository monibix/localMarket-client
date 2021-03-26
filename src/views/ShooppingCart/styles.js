import styled from "styled-components";
import * as palette from "../../commons/variables"
import { Button } from "../../commons/commons.style"


export const ContainerShoppingItem = styled.img`
    width: 2vw; 
    border: 2px solid #1687A7;
    display: flex;
`

export const Img = styled.img`
    width: 5vw;
`

export const Div = styled.div`
    min-height: 65vh;
    display: flex;
    font-family: ${palette.fontContent};
    .shopping-list-container{
        margin-left: 5vw;
        min-width: 50vw;
            .shopping-list-item {
                border: 1px solid ${palette.blackColor};
                margin: 5vw;
                img {
                    width: 10vw;
                    margin-right: 1vw;
                }
            .top {
                display: flex;
                    .title-price {
                        display: flex;
                        flex-direction: column;
                        padding: 1vw;
                        h3 {
                            font-size: 1.5vw;
                        }
                        h4 {
                            font-size: 1.5vw;
                            text-align: left;
                        }
                    }
                }
            }
        }
    .checkout {
        margin: 5vw 2vw;
        padding: 1vw;
        max-height: 18vw;
        border: 1px solid ${palette.blackColor};
        .subtotal {
            margin-top: 2vw;
            display: flex;
            justify-content: space-between;
            h5 {
                font-size: 1.25vw;
            }
        }
        .envio {
            display: flex;
            justify-content: space-between;
            h6{
                font-size: 1vw;
                font-weight: 300;
            }
        }
        .total-a-pagar {
            margin-top: 1vw;
            display: flex;
            justify-content: space-between;
            h5 {
                font-size: 1.5vw;
            }
        }
        .checkout-buttons{
            margin-top: 1vw;
        }
    }
`

export const ReestyledButton = styled(Button)`
    width: 12vw;
    padding: 0.25vw 0.5vw;
    margin: 1vw 0vw 0vw 0vw;
`