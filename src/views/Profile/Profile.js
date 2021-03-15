import React from 'react';
import { Div, Button } from './style'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar';
import { useAuth } from '../../context/AuthContext.utils.js';
import { Link } from 'react-router-dom';


function Profile() {

    const { user={}, getUserInfo } = useAuth()
    console.log("userinfo", user)

    //Intento de traer la info del usuario
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
                <div className="content">
                    <h1>Profile</h1>
                    <Link to="/profile/edit"> <Button>Edit Profile</Button></Link>
                    <h2> {user.user} </h2>
                    <p>{user.email}</p>
                    <p>{user.direction}</p>
                    <p>{user.username}</p>
                    <img src={user.userImage} alt="User"/>
                </div>
            </Div>
        </div>
    )
}

export default Profile;



// function Profile() {
//     const { user = {}, getUserInfo } = useAuth();
//     React.useEffect(() => {
//       getUserInfo(user.user);
//     }, []);
  
  

//     return (
//       <div>
//         <div>
//           <Navbar />
//         </div>
//         <Div>
//           <Sidebar />
//           <div className="content">
//             <h1>Profile</h1>
//             <Link to="/profile/edit">
//               <Button>Edit Profile</Button>
//             </Link>
//             <h2> {user.user} </h2>
//             <p>{user.email}</p>
//             <p>{user.direction}</p>
//             <p>{user.username}</p>
//           </div>
//           </Div>
//       </div>
//       )


//   }
  
//   export default Profile; 
