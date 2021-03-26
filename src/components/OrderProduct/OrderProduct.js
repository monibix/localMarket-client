import React from "react";

function OrderProduct (props) {

    return (
        <tr >
            <td>{props.reference}</td>
            <td>{props.title}</td>
            <td>{props.price}</td>
        </tr>
    )
}

export default OrderProduct;