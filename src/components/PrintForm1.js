import React from 'react';
import { useState } from "react";

import print from '../img/print.png'

let textInput = React.createRef();


export default function PrintForm1(props) {
    console.log('how about me');
    console.log(props);
    return (
      
    <div className="rectangles">
      <div className="sep">
            {/* {props.userNow} <br/>*/}
             Impression rapide
              </div>
           <div> <img className="imggoog" src={print} alt="Logo" /></div>
           
    
 <div className="sep">
    <input className="ginput"  type="text" name="name"  placeholder="recherche google..." /> </div>
    <div className="sep">
    <input type="file" /> </div>
  <div className="sep">
  
    <input type="file" /> </div>
  <div className="sep">
  
    <input type="file" /> </div>
  <div className="sep">
  <input className="gbutton" type="submit" value="Envoyer" />
</div>
        </div>
    )
}