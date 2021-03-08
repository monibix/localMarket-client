import React from 'react';
import { useAuth } from '../../context/AuthContext.utils'

function Logout () {

    const {handleLogout} = useAuth()

    return (
            <button onClick={handleLogout}>Logout</button>
    )
}

export default Logout;