import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useAuth } from '../../context/AuthContext.utils';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Subnavbar from '../../components/SubNavbar/SubNavbar';

function Signup() {
    
    const { handleSignup } = useAuth();
    console.log("handleSignup", handleSignup)

    return (
        <div>   
            <div>   
                <Navbar/>   
                <Subnavbar />
            </div>  
            <AuthForm btnText="SIGNUP" onSubmit={handleSignup} />
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Signup;