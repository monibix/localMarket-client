import styled from "styled-components";
import * as palette from "../../commons/variables"


export const MyAreaContainer = styled.div`
    background-color: white;
    display: flex;
    .content{
        margin: 3vw auto;
        
        h3 {
            margin-bottom: 3vw;
            font-family: ${palette.fontContent}
        }
        .table-container {
            min-width: 50vw;
        }
        .single-table-container {
            margin-bottom: 2vw;
            table {
                min-width: 50vw;
                text-align: left;
                thead {
                    th {
                        padding: 0.5vw 1vw;
                        background-color: ${palette.goldenColor};
                        color: white;
                    }
                }
                tbody {
                    tr {
                        padding-left: 1vw;
                        td {
                            padding-left: 1vw;
                            border: 1px solid ${palette.blackColor}
                        }
                    }
                }
                tfoot {
                    td {
                        background-color: ${palette.blackColor};
                        color: white;
                        font-weight: 500;
                        padding: 0.3vw 0vw 0.3vw 0;
                        .result {
                        background-color: "red";
                    }
                    }

                }
            }
        }


    }
`




// export const OrderContainer = styled.div`
//     border: 2px solid black;
//     .div {
//         border: 2px solid red;
//     }
// `