import React from 'react';
import { Div, Button } from './style'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar';
import { useAuth } from '../../context/AuthContext.utils.js';
import { Link } from 'react-router-dom';


function Profile() {

    const { user } = useAuth()

    return (
        <div>
            <div>
                <Navbar/>
            </div>

            <Div>
                <Sidebar/>
                <div className="content">
                    <h1>Profile</h1>
                    <Link to="/profile/edit"> <Button>Edit Profile</Button></Link>
                    <h2> {user.user} </h2>

                </div>
            </Div>
        </div>
    )
}

export default Profile;