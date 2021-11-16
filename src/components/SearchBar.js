import React from 'react';
import { useState } from "react";

import goog from '../img/google.png'

let textInput = React.createRef();

const activateLasers= ()=>{

    console.log('yes');
    console.log(textInput.current.value);
    const link=`https://www.google.co.ma/search?client=firefox-b-d&q=${textInput.current.value}`;
    window.open(link, link);
}
export default function SearchBar() {
    const [title, setTitle] = useState("");
    return (
        <div className="rectangles">
           <div> <img className="imggoog" src={goog} alt="Logo" /></div>
 <div className="sep">
    <input className="ginput" ref={textInput} type="text" name="name"  placeholder="recherche google..." /> </div>
  <div className="sep">
  <input className="gbutton" onClick={e => {e.preventDefault();activateLasers()}}type="submit" value="Recherche" />
</div>
        </div>
    )
}
