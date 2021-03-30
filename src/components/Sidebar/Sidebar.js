import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom'

function Sidebar() {

    return (
        <S.SidebarContainer>   

            <Link to="/profile"><h4>MI PERFIL</h4></Link>

            <Link to="/products"><h4>MIS PRODUCTOS</h4></Link>

            <Link to="/add"><h4>CREAR </h4></Link>

            <Link to="/favourites"><h4>MIS FAVORITOS</h4></Link>

            <Link to="/orders"><h4>MIS PEDIDOS</h4></Link>

        </S.SidebarContainer>
    )
}

export default Sidebar;