import React from 'react';
import * as S from "./style";
import { Button } from "../../commons/commons.style";
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
        setState({...state, userImage: data})
        setImageReady(true)
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <S.MyAreaContainer>
                <Sidebar/>
                <div className="content">
                    <h3>Actualiza tu perfil</h3>
            
                <S.Form onSubmit={handleSubmit}>
                    <S.Head>
                        <div className="image-container">
                            <S.Label htmlFor="image">Imagen de perfil</S.Label>
                            <S.Input 
                                type="file"     
                                name="image" 
                                value={state.image}     
                                onChange={handleUpload}
                                disable={!imageReady} 
                            />
                        </div>
                        <div className="title-section">
                            <div className="field-container">
                                <S.Label htmlFor="username">Nombre de usuario</S.Label>
                                <S.Input 
                                    type="text" 
                                    name="username"  
                                    onChange={handleEdit}
                                    value={state.username}
                                />
                            </div>
                            <div className="field-container">
                                <S.Label htmlFor="direction">Dirección postal</S.Label>
                                <S.Input 
                                    type="text" 
                                    name="direction"
                                    onChange={handleEdit}
                                    value={state.direction}
                                />
                            </div>
                            <div className="field-container">
                                <S.Label htmlFor="instagram">Instagram</S.Label>
                                <S.Input 
                                    type="text" 
                                    name="instagram"
                                    onChange={handleEdit}
                                    value={state.instagram}
                                />
                            </div>
                            <div className="field-container">
                                <S.Label htmlFor="phone">Teléfono</S.Label>
                                <S.Input 
                                    type="text" 
                                    name="phone"
                                    onChange={handleEdit}
                                    value={state.phone}
                                />
                            </div>
                        </div>
                    </S.Head>

                    <S.Description>
                        <div className="description-container">
                            <S.Label>Descripción</S.Label>
                            <S.Textarea                                     
                                    name="description" 
                                    cols="30" 
                                    rows="10"
                                    placeholder="write something about you"
                                    onChange={handleEdit}
                                    value={state.description}></S.Textarea>
                        </div>
                    </S.Description>
                    <div>
                        <Button type="submit" disable={!imageReady} >Guardar</Button>
                        <Button onClick={()=>{history.push(`/profile`)}} >Descartar</Button>
                    </div>
                </S.Form>
                </div>
            </S.MyAreaContainer>
        </div>
    )
}

export default EditProfile;