import React from "react";
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
    console.log("getUserInfo", user)

    return(
        <div>
            <div>
                <Navbar />
            </div>
            <S.MyAreaContainer>
                <Sidebar/>
                <div className="content">
                    <h3>Mis pedidos</h3>
                    <div className="table-container">
                            {
                                user.orders?.length ? (
                                    
                                    user.orders?.map((item, key) =>{
                                        return (
                                            <div key={Math.random()} className="single-table-container">
                                            <h5>Pedido nº{user.orders?.indexOf(item)+1} </h5>
                                                <table >
                                                    <thead>
                                                        <tr>
                                                            <th>Referencia</th>
                                                            <th>Título</th>
                                                            <th>Precio</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                {
                                                    item.map((it, key)=> {
                                                        return <OrderProduct 
                                                            reference={it.reference} 
                                                            title={it.title}
                                                            price={it.price}  
                                                            key={Math.random()}  
                                                            />
                                                    })
                                                }
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                    <td></td>
                                                    <td>SUBTOTAL</td>
                                                    <td className="result">                                                         
                                                        {
                                                            user.orders[key].reduce((acc, next)=>{
                                                                return acc + next.price
                                                            },0)
                                                        }
                                                    </td>
                                                    </tr>
                                                </tfoot>
                                                </table>
                                            </div>
                                        )
                                    } )
                                ) : (
                                    <h3>No tienes compras. Realiza tu primera compra y haz seguimiento desde aquí.</h3>
                                )
                            }
                    </div>
                </div>    
            </S.MyAreaContainer>
            
        </div>
    )
}

export default MyOrders;
