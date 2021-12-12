import React from 'react';
import { Form} from "react-bootstrap";
import { useState } from "react";
import Select from 'react-select'
import print from '../img/print.png'
import DatePicker from "react-datepicker";
import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

let textInput = React.createRef();
const options = [
  { value: 'Couleur', label: 'Couleur' },
  { value: 'Noire', label: 'Noire' },
  { value: 'Couleur & Noire', label: 'Couleur & Noire' }
];

export default function PrintForm1(props) {
  const [startDate, setStartDate] = useState(new Date()
  
 
  );
    console.log('how about me');
    console.log(props);
    return (
      <Form style={{border:'border:1px solid black'}}>
  
    <div  className="rectangles shadow-lg p-3 mb-5  rounded"  style={{border:'0,2px solid black' , width:'10%' , backgroundColor:'#5A6673'}}>
      <div className="sep">
            {/* {props.userNow} <br/>*/}
            <div><p><b>IMPRESSION RAPIDE</b></p></div> 

            
    
    
            <div> <img className="imggoog" src={print} alt="Logo" /></div>
              </div>
           
           
    
 <div className="sep">
 <Form.Control type="text"  style={{width:'60%' ,margin:'0 auto'}}placeholder={props.userNow} readOnly />
 
 <Form.Text className="Formtxt"  style={{color:'black' }}>
      Votre email ne sera jamais partager.
    </Form.Text>
  </div> <div className="sepspace">    </div>
    <div className="sep">
    <label  className="printLabel">Choisissez votre ficher </label><br/>
       <input  className="fileIn"  data-buttonText="Parcourir" type="file" /><br/>
       <Form.Text   className="Formtxt" style={{color:'black' }}>
      Formats : doc , docx , rtf , jpg , pdf sont acceptes
    </Form.Text>
        </div>
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
    min="0"
    placeholder="Nombre de copie"
    style={{textAlign:'center'}}
/>
     </div>
     <div className="sepspace">    </div>
     <div className="sep">
     <label  className="printLabel">Choisissez La date de recuperation </label><br/>
     <DatePicker  className="seldate" selected={startDate} 
     onChange={(date) => setStartDate(date)} 
     
     disabledDays={  {daysOfWeek: [0, 6]} }
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
      excludeTimes={[
        
      ]}
      
     
     />
    </div>

    <div classNamae="sep"><br/>
    <label className="printLabel">Autres details </label><br/>

    <Form.Control as="textarea"  style={{resize:'none' , width:'60%',margin:'0 auto'}}  rows={3} />
    </div><br/><br/>
  <div className="sep">
  {/*<input className="gbutton" type="submit" value="Envoyer" />*/}
  <Button variant="dark"  className="gbutton">ENVOYER</Button>{' '}
</div><br/><br/><br/><br/>
<div className="sepspace">    </div>
<br/>
        </div>
        </Form>
    )
}