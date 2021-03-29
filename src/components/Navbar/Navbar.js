import React from 'react';
import * as S from './styles'
import {Link} from 'react-router-dom';
import Logout from '../../components/Logout/Logout';
import Searchbar from '../Searchbar/Searchbar';
import { useAuth } from '../../context/AuthContext.utils';
import {Button} from "../../commons/commons.style";
import Carrito from "../../components/Carrito/Carrito";
import LogoImg from "../../assets/logo-local-market.png"

function Navbar () {

    const { user } = useAuth()
    console.log("user", user)
    
    if (user.isLogged) {
        return (
            <S.Nav>
                <S.Div>
                    <Link to="/"><S.Logo src={LogoImg} alt="LocalMarket"/></Link>
                </S.Div>
                <S.Div className="searchbar">
                    <Searchbar/>
                </S.Div>
                <S.Div className="list">
                    <Link to="/products"><Button>MI AREA</Button></Link>
                    <Link to="/add"><Button>CREAR</Button></Link>
                    <Carrito />
                    <Logout/>
                </S.Div>
            </S.Nav>
        )
    }

    if (!user.isLogged) {
        return (
            <S.Nav>
                <S.Div>
                    <Link to="/"><S.Logo src={LogoImg} alt="LocalMarket"/></Link>
                </S.Div>
                <S.Div>
                    <Searchbar/>
                </S.Div>
                <S.Div>
                    <Link to="/signup"><Button>SIGN UP</Button></Link>
                    <Link to="/login"><Button>LOGIN</Button></Link>
                </S.Div>
        </S.Nav>
        )   
    }
}

export default Navbar;