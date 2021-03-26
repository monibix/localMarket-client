import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom'

function Sidebar() {

    return (
        <S.SidebarContainer>   

            <Link to="/profile"><h4>MY PROFILE</h4></Link>

            <Link to="/products"><h4>MY PRODUCTS</h4></Link>

            <Link to="/add"><h4>NEW PRODUCT</h4></Link>

            <Link to="/favourites"><h4>MY FAVORITES</h4></Link>

            <Link to="/orders"><h4>MY ORDERS</h4></Link>

        </S.SidebarContainer>
    )
}

export default Sidebar;