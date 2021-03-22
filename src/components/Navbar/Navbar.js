import React from 'react';
import {Logo, Nav, Div} from './styles'
import {Link} from 'react-router-dom';
import Logout from '../../components/Logout/Logout';
import Searchbar from '../Searchbar/Searchbar';
import { useAuth } from '../../context/AuthContext.utils';
import {Button} from "../../commons/commons.style";
import Carrito from "../../components/Carrito/Carrito";

function Navbar () {

    const { user } = useAuth()
    console.log("user", user)
    
    if (user.isLogged) {
        return (
            <Nav>
                <Div>
                    <Link to="/"><Logo src="https://image.flaticon.com/icons/png/512/649/649742.png" alt="LocalMarket"/></Link>
                </Div>
                <Div className="searchbar">
                    <Searchbar/>
                </Div>
                <Div className="list">
                    <Link to="/products"><Button>My Area</Button></Link>
                    <Link to="/add"><Button>Create Product</Button></Link>
                    <Carrito />
                    <Logout/>
                </Div>
            </Nav>
        )
    }

    if (!user.isLogged) {
        return (
            <Nav>
                <Div>
                    <Link to="/"><Logo src="https://image.flaticon.com/icons/png/512/649/649742.png" alt="LocalMarket"/></Link>
                </Div>
                <Div className="searchbar">
                    <Searchbar/>
                </Div>
                <Div className="list">
                    <Link to="/signup"><Button>Signup</Button></Link>
                    <Link to="/login"><Button>Login</Button></Link>
                </Div>
        </Nav>
        )   
    }
}

export default Navbar;