import React from 'react';
import { Div } from "./style";
import Gmail from "../../assets/gmail.png";
import Direction from "../../assets/direction.png";
import Instagram from "../../assets/instagram.png";
import Phone from "../../assets/phone.png";

function ProfileComp(props) {

    return (    
            <Div>
                <div className="header">
                    <div>
                        <img src={props.userImage} alt="props"/>
                    </div>
                    <div className="title">
                        <h2>{props.username}</h2>
                        <p><img src={Direction} alt="gmail"/> {props.direction} <span><a href={ `https://www.google.es/maps/place/${props.direction}` } target="_blank" rel="noreferrer">Ver mapa</a></span><br/>
                        <img src={Gmail} alt="gmail"/> {props.email}<br />
                        <img src={Instagram} alt="insta"/> {props.instagram}
                        <br />
                        <img src={Phone} alt="phone"/> {props.phone}</p>
                        <div className="description">
                            <h4>Descripcion</h4>
                            <div>
                                <p className="text-description">{props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>   
            </Div>
    )
}

export default ProfileComp;