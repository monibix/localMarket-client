import React from 'react';
import { Div, Category } from './style'
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'

function Main() {

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <h1>Home</h1>
            <Div>
                <Link>
                <Category>
                    <h3>Joyería</h3>
                </Category>
                </Link>
                <Category>
                    <h3>Bebés y niños</h3>
                </Category>
                <Category>
                    <h3>Moda</h3>
                </Category>
                <Category>
                    <h3>Muebles y decoración</h3>
                </Category>
                <Category>
                    <h3>Complementos</h3>
                </Category>
                <Category>
                    <h3>Cosmética</h3>
                </Category>
            </Div>
        </div>
    )
}

export default Main;