import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useAuth } from '../../context/AuthContext.utils';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from "react-router-dom"

function Signup() {
    
    const { handleSignup } = useAuth();
    console.log("handleSignup", handleSignup)

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <h1>Signup</h1>
            <AuthForm btnText="signup" onSubmit={handleSignup} />
            <p>Already registered? Please <Link to="/login">log in</Link></p>
        </div>
    )
}

export default Signup;