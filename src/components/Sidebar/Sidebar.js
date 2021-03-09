import React from 'react';
import { Div } from './styles';
import { Link } from 'react-router-dom'

function Sidebar() {

    return (
        <Div>   

            <Link to="/profile"><h4>My profile</h4></Link>

            <Link to="/products"><h4>My products</h4></Link>

            <Link to="/add"><h4>Create product</h4></Link>
        </Div>
    )
}

export default Sidebar;