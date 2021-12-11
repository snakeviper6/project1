import React from 'react';
import { useState } from "react";
import Select from 'react-select'
import print from '../img/print.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

let textInput = React.createRef();
const options = [
  { value: 'Couleur', label: 'Couleur' },
  { value: 'Noire', label: 'Noire' },
  { value: 'Couleur & Noire', label: 'Couleur & Noire' }
];

export default function PrintForm1(props) {
  const [startDate, setStartDate] = useState(new Date());
    console.log('how about me');
    console.log(props);
    return (
      
    <div className="rectangles">
      <div className="sep">
            {/* {props.userNow} <br/>*/}
            <div><p><b>IMPRESSION RAPIDE</b></p></div> 
              </div>
           <div> <img className="imggoog" src={print} alt="Logo" /></div>
           
    
 <div className="sep">
 <div>{props.userNow}</div> </div> <div className="sepspace">    </div>
    <div className="sep">
    <label  className="printLabel">Choisissez votre ficher </label><br/>
    <input  className="fileIn"  data-buttonText="Parcourir" type="file" /> </div>
    <div className="sepspace">    </div>
  <div className="sep">
  <label className="printLabel">Choisissez le type d'impression </label><br/>
  <Select className="selop" options={options} /> </div> <div className="sepspace">    </div>
  <div className="sep">
  <label  className="printLabel">Choisissez le nombre de copies </label><br/>
  <input
  className="selnum"
    type="number"
    name="nombre"
    placeholder="Nombre de copie"
    
/>
     </div>
     <div className="sepspace">    </div>
     <div className="sep">
     <label  className="printLabel">Choisissez La date de recuperation </label><br/>
     <DatePicker  className="seldate" selected={startDate} 
     onChange={(date) => setStartDate(date)} 
     
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
     
     
     />
    </div>

    <div classNamae="sep"><br/>
    <label className="printLabel">Autres details </label><br/>

<input type="textarea" 

  name="textValue"

  

/>
    </div><br/><br/>
  <div className="sep">
  <input className="gbutton" type="submit" value="Envoyer" />
</div><br/><br/><br/><br/>
<div className="sepspace">    </div>
<br/>
        </div>
    )
}