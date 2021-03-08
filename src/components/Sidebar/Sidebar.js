import React from 'react';
import { Div } from './styles';
import { Link } from 'react-router-dom'

function Sidebar() {

    return (
        <Div>   
            <h1>Sidebar</h1>
            <h2>products</h2>
            <h2>profile</h2>
            <Link to="/create"><h6>Create product</h6></Link>
        </Div>
    )
}

export default Sidebar;