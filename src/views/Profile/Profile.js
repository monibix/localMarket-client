import React from 'react';
import { Div, Button } from "../../commons/commons.style";
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar';
import { useAuth } from '../../context/AuthContext.utils.js';
import { Link } from 'react-router-dom';
import ProfileComp from "../../components/ProfileComp/ProfileComp";


function Profile() {

    const { user={}, getUserInfo } = useAuth()
    console.log("userinfo", user)

    React.useEffect(()=>{
        getUserInfo(user.user)
    }, [])

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <Div>
                <Sidebar/>    
                <div>
                    <ProfileComp 
                    username={user.username} 
                    email={user.email}
                    direction={user.direction}
                    userImage={user.userImage}
                    user={user.user}
                    description={user.description}
                    valores={user.valores}
                    />
                    <Link to={`/profile/edit`} ><Button>Editar perfil</Button></Link>
                </div>

            </Div>

        </div>
    )
}

export default Profile;

