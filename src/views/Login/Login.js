import React from 'react';
import { Div } from "../../commons/commons.style"
import AuthForm from '../../components/AuthForm/AuthForm';
import { useAuth } from '../../context/AuthContext.utils';
import Navbar from '../../components/Navbar/Navbar';

function Login() {
    const { handleLogin } = useAuth();

    return (
        <div>
        <div>
            <Navbar/>
        </div>
        
        <h1>Login</h1>
        <AuthForm btnText="login" onSubmit={handleLogin} />
        
    </div>
    )

}

export default Login;