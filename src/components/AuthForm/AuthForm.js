import React from 'react';
import { useAuth } from '../../context/AuthContext.utils';
import { Form, Input, Button, Label } from "./styles";


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

    return (
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
            <Button type="submit">{btnText}</Button>
            <h5>{error}</h5>
            </Form>
    )
}

export default AuthForm;