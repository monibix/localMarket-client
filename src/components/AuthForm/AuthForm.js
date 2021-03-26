import React from 'react';
import * as S from "./styles";
import { useAuth } from '../../context/AuthContext.utils';
import { Form, Input, Label, StyledButton } from "./styles";
import { Link, useLocation } from "react-router-dom";

function AuthForm({btnText, onSubmit}) {
    const [state, setState] = React.useState({email: "", password: ""})
    const { error } = useAuth()

    const handleChange = ({target}) => {
        setState({ ...state, [target.name]: target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(state)
    }

    const location = useLocation()

    return (
        <S.LoginSignupContainer>
            <div>
            <h3>{btnText}</h3>
        <Form onSubmit={handleSubmit}>
            <Label>Email</Label>
            <Input
                type="text"
                name="email"
                value={state.email}
                onChange={handleChange}
            />
            <Label>Password</Label>
            <Input
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
            />
            <StyledButton type="submit">{btnText}</StyledButton>
            {
                location.pathname.includes("signup") ? (
                    <p>Already registered? Please <Link to="/login">login</Link></p>
                ) : (
                    <p>Don't have an account? Register <Link to="/signup">here</Link></p>
                )
            }
            <h5>{error}</h5>
            </Form>
            </div>
        </S.LoginSignupContainer>
    )
}

export default AuthForm;