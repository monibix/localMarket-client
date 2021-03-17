import React from 'react';
import { Div } from "./style";
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { getSellerDetails as getSellerDetailsService } from "../../service/main.service"


function SellerDetails() {
    const {sellerId} = useParams()
    console.log("sellerId", sellerId)

    const [seller, setSeller] = React.useState([])

    React.useEffect(()=>{
        getSellerDetailsService(sellerId).then(({data: sellerInfo})=>{
            setSeller(sellerInfo)
        })
    }, [sellerId])

    console.log("seller", seller)
    
    return (    
        
        <div>   
        
            <div>   
            
                <Navbar/>   
                
            </div>  
            <h1>Seller Details </h1>

            <Div>
                <h2>Seller info</h2>
                <h3>{seller.email}</h3>
                <h3>{seller.direction}</h3>
                <img src={seller.userImage} alt="seller"/>
                <h3>{seller.username}</h3>
            </Div>
        </div>
    )

}

export default SellerDetails;