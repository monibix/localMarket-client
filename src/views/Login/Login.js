import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useAuth } from '../../context/AuthContext.utils';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Subnavbar from '../../components/SubNavbar/SubNavbar';

function Login() {
    const { handleLogin } = useAuth();

    return (
        <div>   
            <div>   
                <Navbar/>   
                <Subnavbar />
            </div>  
        
            <AuthForm btnText="LOGIN" onSubmit={handleLogin} />
        
        <div>
            <Footer />
        </div>
    </div>
    )

}

export default Login;