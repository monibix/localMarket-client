import React from 'react';
import { Div, Form, Input, Label, Button } from './style';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useAuth } from '../../context/AuthContext.utils';
import { editUser } from '../../service/auth.service';
import { useHistory } from 'react-router-dom';
import {getUser as getUserService} from '../../service/auth.service';


function EditProfile() {

    const history = useHistory()

    const {user} = useAuth()
    console.log("user id", user._id)

    const initialState = {username: "", direction: ""}

    const [state, setState] = React.useState(initialState)

    React.useEffect(()=>{
        getUserService().then(({data: currentUser})=>{
            setState(currentUser)
        })
    }, [])

    const handleEdit = (e) => {
        const {name, value} = e.target
        console.log("name, value", value)
        setState({...state, [name]:value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await editUser(state)
        history.push('/profile')
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
                    <h2>{user.user}</h2>
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