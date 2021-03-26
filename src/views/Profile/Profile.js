import React from 'react';
import { Div, Button } from "../../commons/commons.style";
import * as S from "./style";
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar';
import { useAuth } from '../../context/AuthContext.utils.js';
import { Link } from 'react-router-dom';
import ProfileComp from "../../components/ProfileComp/ProfileComp";

function Profile() {

    const { user={}, getUserInfo } = useAuth()
    console.log("user", user)

    React.useEffect(()=>{
        getUserInfo(user.user)
    }, [])

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <S.MyAreaContainer>
                <Sidebar/>
                <div className="content">
                    <h3></h3>
                    <ProfileComp 
                    username={user.username} 
                    email={user.email}
                    direction={user.direction}
                    userImage={user.userImage}
                    user={user.user}
                    description={user.description}
                    valores={user.valores}
                    instagram={user.instagram}
                    phone={user.phone}
                    />
                    <Link to={`/profile/edit`} ><Button>Editar perfil</Button></Link>
                </div>
            </S.MyAreaContainer>
        </div>
    )
}

export default Profile;

