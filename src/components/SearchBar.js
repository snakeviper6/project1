import React from 'react';
import { useState } from "react";
import axios from 'axios';
import goog from '../img/google.png'
import { Button } from "react-bootstrap";
let textInput = React.createRef();
const Hello=(x)=>{
  if(x!==""){
    axios.post('https://service.cyberbadr.com/sr', {
        suj: x,
        
      })
      .then(function (response) {
        console.log(response);
        
        
      
      })
      .catch(function (error) {
        console.log(error);
      });

    }
 }
const activateLasers= ()=>{
     
    console.log('yes');
    console.log(textInput.current.value);
    Hello(textInput.current.value);
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
    <div className="sepspace">    </div>
  <div className="sep">
  {/*<input className="gbutton" type="submit" value="Recherche" />*/}
  <Button variant="dark" onClick={e => {e.preventDefault();activateLasers()}}  className="gbutton">Recherche Google</Button>{' '}
</div>
        </div>
    )
}
