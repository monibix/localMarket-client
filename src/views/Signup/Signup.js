import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useAuth } from '../../context/AuthContext.utils';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from "react-router-dom";
import { SubNavbar } from "../../commons/commons.style"
import Footer from '../../components/Footer/Footer';

function Signup() {
    
    const { handleSignup } = useAuth();
    console.log("handleSignup", handleSignup)

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
            <AuthForm btnText="SIGNUP" onSubmit={handleSignup} />
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Signup;