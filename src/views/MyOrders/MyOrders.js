import React from "react";
import { Div } from "../../commons/commons.style"
import * as S from "./style"
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAuth } from "../../context/AuthContext.utils";
import OrderProduct from "../../components/OrderProduct/OrderProduct";

function MyOrders() {
    const { user, getUserInfo } = useAuth()
    console.log("user", user)

    React.useEffect(()=>{
        getUserInfo(user)
    }, [])
    console.log("getUserInfo", user.orders)

    return(
        <div>
            <div>
                <Navbar />
            </div>
            <Div>
                <Sidebar />

                    <h1>MyOrders</h1>
                    <S.OrderContainer>
                    {/* <table>
                        <thead>
                            <tr>
                                <th>Reference</th>
                                <th>Title</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>                    
                    {
                        user.orders?.map((item)=>{

                            return (
                                    item.map((it, key)=>{
                                        return <OrderProduct 
                                            reference={it.reference} 
                                            title={it.title}
                                            price={it.price}  
                                            key={Math.random()}  
                                            />
                                    })
                                )
                        })

                    }
                        </tbody>
                    </table> */}
                    
                    {
                        user.orders?.length ? (

                            user.orders?.map((item)=>{

                                return (
                                        item.map((it, key)=>{
                                            return <OrderProduct 
                                                reference={it.reference} 
                                                title={it.title}
                                                price={it.price}  
                                                key={Math.random()}  
                                                />
                                        })
                                    )
                                })

                        ) : (
                            <h3>No tienes compras. Podrás hacer seguimiento de tus compras desde aquí.</h3>
                        )
                    }

                    </S.OrderContainer>
            </Div>
            
        </div>
    )
}

export default MyOrders;



// {/* return <div>
//     <tr>
//         <td>Reference: {it.reference}</td>
//         <td>Title: {it.title}</td>
//         <td>Price: {it.price}</td>
//     </tr>
// </div> */}