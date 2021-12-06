import React from 'react'
import King from './King.js'
import cyb from '../img/p1.png'



export default function Top() {
    return (
        <div className="maintop">
            <div className="top-left">
                <div className="top-left-left">
                    <div className="imglogodiv">
                <img className="logoimg" src={cyb} alt="Logo" /></div>
                 
            </div>
            <div className="top-left-right">
            <div className="imglogodiv">
            <div className="mainslogan">CYBER BADR</div>
            <div className="slogan">À votre service depuis 2002</div>
             </div>
            
            </div>
            </div>
            <div className="top-right">
            
            <King/>
            
        </div>
        </div>
    )
}
