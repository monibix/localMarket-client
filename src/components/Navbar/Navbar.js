import React from 'react';
import {Logo, Nav, Button} from './styles'
import {Link} from 'react-router-dom';
import Logout from '../../components/Logout/Logout';

function Navbar () {

    return (
        <Nav>
            <div>
                <Link to="/"> <Logo src="https://www.soyvisual.org/sites/default/files/styles/augmentative_resource_search/public/images/photos/rombo-p.jpg?itok=MxvctFEk" alt="LocalMarket"/></Link>
            </div>
            <div>
                <input type="text" placeholder="search something..."/>
            </div>
            <div className="list">
                <Link to="/signup"><Button>Signup</Button></Link>
                <Link to="/login"><Button>Login</Button></Link>
                <Logout/>
            </div>
        </Nav>
    )
}

export default Navbar;