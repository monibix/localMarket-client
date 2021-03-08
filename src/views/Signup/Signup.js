import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { signup } from '../../service/auth.service'
import { useAuth } from '../../context/AuthContext.utils';
import Navbar from '../../components/Navbar/Navbar';

function Signup() {
    
    const { handleSignup } = useAuth();

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <h1>Signup</h1>
            <AuthForm btnText="signup" onSubmit={handleSignup} />
            
        </div>
    )
}

export default Signup;