import React from 'react';
import { SubNavbar } from "../../commons/commons.style";
import AuthForm from '../../components/AuthForm/AuthForm';
import { useAuth } from '../../context/AuthContext.utils';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer';

function Login() {
    const { handleLogin } = useAuth();

    return (
        <div>   
            <div>   
                <Navbar/>   
                <SubNavbar>
                    <Link>Complementos</Link>
                    <Link>Moda</Link>
                    <Link>Muebles y Decoración</Link>
                    <Link>Joyería</Link>
                    <Link>Bebes y Niños</Link>
                    <Link>Cosmética</Link>
                </SubNavbar>
            </div>  
        
        <AuthForm btnText="LOGIN" onSubmit={handleLogin} />
        
        <div>
            <Footer />
        </div>
    </div>
    )

}

export default Login;