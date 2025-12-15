import { useState } from 'react'
import viteLogo from '/vite.svg'
import './Card.css'
import {useEffect} from "react";

function Card ({element})
{
    console.log(element.CompanyLogo);
    return (<div className="card">
                <img id="companyLogo" src={element.CompanyLogo} />
                <div id="info">
                    <h1 id = "companyName">{element.CompanyName}</h1>
                    <h2 id="positionName">{element.OppType}</h2>
                </div>
                <p>message</p>
            </div>);
}

export default Card;
//<!-- <p id="deadLine">{props.Deadline}</p> -->