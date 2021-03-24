import React from "react";
import { Div } from "../../commons/commons.style"
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAuth } from "../../context/AuthContext.utils";

function MyOrders() {
    const { user={}, getUserInfo } = useAuth()
    console.log("user", user)

    const [ userOrders, setUserOrders] = React.useState([])

    React.useEffect(()=>{
        getUserInfo(user.user).then(()=> {
            setUserOrders(user.orders)
        })
    }, [])
    console.log("getUserInfo", user)
    console.log("userorders", userOrders)

    return(
        <div>
            <div>
                <Navbar />
            </div>
            <Div>
                <Sidebar />

                    <h1>MyOrders</h1>

            </Div>
            
        </div>
    )
}

export default MyOrders;