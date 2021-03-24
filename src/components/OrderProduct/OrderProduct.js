import React from "react";

function OrderProduct (props) {

    return (
        <tr style={{border: "3px solid #1C87A7"}}>
            <td>{props.reference}</td>
            <td>{props.title}</td>
            <td>{props.price}</td>
        </tr>
    )
}

export default OrderProduct;