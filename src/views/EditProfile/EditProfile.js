import React from 'react';
import { Div, Form, Input, Label, Button } from './style';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';


function EditProfile() {

    

    const initialState = {username: "", direction: ""}

    const [state, setState] = React.useState(initialState)

    const handleEdit = (e) => {
        const {name, value} = e.target
        console.log("name, value", value)
        setState({...state, [name]:value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>

            <Div>
                <Sidebar/>
                <div className="content">
                    <h1>Edit Profile</h1>
                    <Form onSubmit={handleSubmit}>
                    <Label htmlFor="username">Username</Label>
                    <Input 
                        type="text" 
                        name="username"  
                        onChange={handleEdit}
                        value={state.username}
                    />
                    <Label htmlFor="direction">Direction</Label>
                    <Input 
                        type="text" 
                        name="direction"
                        onChange={handleEdit}
                        value={state.direction}
                    />
                    <Button type="submit">Edit Profile</Button>
                    </Form>
                </div>
            </Div>
        </div>
    )
}

export default EditProfile;