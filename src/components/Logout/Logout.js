import React from 'react';
import { Button } from './styles';
import { useAuth } from '../../context/AuthContext.utils'

function Logout () {

    const {handleLogout} = useAuth()

    return (
            <Button onClick={handleLogout}>Logout</Button>
    )
}

export default Logout;