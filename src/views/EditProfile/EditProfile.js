import React from 'react';
import * as S from "./style";
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

    const initialState = {username: "", direction: "", image: "", description: "", valores: []}

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
            <S.Div>
                <Sidebar/>

                <div className="content">
                    <h1>Edit Profile</h1>
                    <h4>{user.user}</h4>
                <S.Form onSubmit={handleSubmit}>

                    <div className="header">
                        <div>
                            <S.Label htmlFor="image">User Image</S.Label>
                            <S.Input 
                                type="file"     
                                name="image" 
                                value={state.image}     
                                onChange={handleUpload}
                                disable={!imageReady} 
                            />
                        </div>
                        <div className="title">
                            <S.Label htmlFor="username">Username</S.Label>
                            <S.Input 
                                type="text" 
                                name="username"  
                                onChange={handleEdit}
                                value={state.username}
                            />
                            <S.Label htmlFor="direction">Direction</S.Label>
                            <S.Input 
                                type="text" 
                                name="direction"
                                onChange={handleEdit}
                                value={state.direction}
                            />
                        </div>

                        <div className="valores">
                            <h2>Valores</h2>
                            <input 
                                type="checkbox" 
                                name="valores" 
                                value={state.value} 
                                onChange={handleEdit}
                                checked={state.valores}
                            />
                            <S.Label>Ecología</S.Label>
                            <input 
                                type="checkbox" 
                                name="valores" 
                                value={state.value} 
                                onChange={handleEdit} 
                                checked={state.valores}
                            />
                            <S.Label>Proximidad</S.Label>
                        </div>

                        <div className="description">
                            <S.Label>Descripción</S.Label>
                            <S.Textarea                                     
                                    name="description" 
                                    cols="30" 
                                    rows="10"
                                    placeholder="write something about you"
                                    onChange={handleEdit}
                                    value={state.description}></S.Textarea>
                        </div>
                    </div>
                    <S.Button type="submit" disable={!imageReady} >Edit Profile</S.Button>
                </S.Form>
                </div>
            </S.Div>
        </div>
    )
}

export default EditProfile;