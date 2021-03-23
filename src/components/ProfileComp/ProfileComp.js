import React from 'react';
import { Div } from "./style";
import Gmail from "../../assets/gmail.png"

function ProfileComp(props) {

    return (    
            <Div>
                <div className="header">
                    <div>
                        <img src={props.userImage} alt="props"/>
                    </div>
                    <div className="title">
                        <h2>{props.username}</h2>
                        <p><img src={Gmail} alt="gmail"/> {props.direction}<br/>
                        <img src={Gmail} alt="gmail"/> {props.email}<br />
                        <img src={Gmail} alt="insta"/> {props.instagram}
                        <br />
                        <img src={Gmail} alt="phone"/> {props.phone}</p>
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
            </Div>
    )
}

export default ProfileComp;