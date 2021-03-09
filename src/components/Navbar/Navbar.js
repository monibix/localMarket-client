import React from 'react';
import {Logo, Nav, Button, Div} from './styles'
import {Link} from 'react-router-dom';
import Logout from '../../components/Logout/Logout';
import Searchbar from '../Searchbar/Searchbar'

function Navbar () {

    return (
        <Nav>
            <Div>
                <Link to="/"> <Logo src="https://image.flaticon.com/icons/png/512/649/649742.png" alt="LocalMarket"/></Link>
            </Div>
            <Div className="searchbar">
                <Searchbar/>
            </Div>
            <Div className="list">
                <Link to="/signup"><Button>Signup</Button></Link>
                <Link to="/login"><Button>Login</Button></Link>
                <Logout/>
            </Div>
        </Nav>
    )
}

export default Navbar;