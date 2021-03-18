import React from 'react';
import { Div } from "./style";
import Gmail from "../../assets/gmail.png"


function ProfileComp(props) {
    // const {sellerId} = useParams()
    // console.log("sellerId", sellerId)

    // const [seller, setSeller] = React.useState([])

    // React.useEffect(()=>{
    //     getSellerDetailsService(sellerId).then(({data: sellerInfo})=>{
    //         setSeller(sellerInfo)
    //     })
    // }, [sellerId])

    // console.log("seller", seller)
    
    return (    

            <Div>
                <div className="header">
                    <div>
                        <img src={props.userImage} alt="props"/>
                    </div>
                    <div className="title">
                        <h2>{props.username}</h2>
                        <p><img src={Gmail} alt="gmail"/> {props.direction}<br/>
                        <img src={Gmail} alt="gmail"/> {props.email}</p>
                    </div>
                </div>  
                <div className="valores">
                    <h4>Valores</h4>
                    <p>Ecológico</p>
                    <p>Ecológico</p>
                    <p>Ecológico</p>
                    <p>Ecológico</p>
                    <p>Ecológico</p>
                </div>  
                <div className="description">
                    <h4>Descripcion</h4>
                    <p>{props.description}</p>
                </div>
                
                

                {/* <h1>next</h1>
                <h2>Seller info</h2>
                <h3>{seller.email}</h3>
                <h3>{seller.direction}</h3>
                <img src={seller.userImage} alt="seller"/>
                <h3>{seller.username}</h3> */}
            </Div>

    )

}

export default ProfileComp;