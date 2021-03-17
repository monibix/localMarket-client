import React from 'react';
import { Div, Form, Input, Label, Button } from './style';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useAuth } from '../../context/AuthContext.utils';
import { editUser } from '../../service/auth.service';
import { useHistory } from 'react-router-dom';
import {getUser as getUserService} from '../../service/auth.service';
import { uploadProductImage } from '../../service/auth.service'


function EditProfile() {

    const history = useHistory()

    const {user} = useAuth()
    console.log("user id", user._id)

    const initialState = {username: "", direction: "", image: ""}

    const [state, setState] = React.useState(initialState)
    const [imageReady, setImageReady] = React.useState(false)


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

    const handleUpload = async (e) => {
        setImageReady(false)
        const uploadData = new FormData()
        uploadData.append('userImage', e.target.files[0]);
        const {data} = await uploadProductImage(uploadData)
        console.log("fileuploaded", data)
        setState({...state, userImage: data})
        setImageReady(true)
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
                    <Label htmlFor="image">User Image</Label>
                    <Input 
                        type="file"     
                        name="image" 
                        value={state.image}     
                        onChange={handleUpload}
                        disable={!imageReady} 
                    />
                    <Button type="submit">Edit Profile</Button>
                </Form>
                </div>
            </Div>
        </div>
    )
}

export default EditProfile;