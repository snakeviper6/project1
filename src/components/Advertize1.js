import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Card , ListGroup,Button } from "react-bootstrap";
import mcafee from '../img/mcafee.png'
export default function Adverstize1() {
  const text="McAfee® Antivirus plus est un antivirus conçu spÉcialement pour détecter et éliminer les menaces comme les virus, les logiciels malveillants, les rançongiciels, les logiciels espions et autres";
  var result = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      return (
        <div>
           <Card className='cardheader shadow-lg p-3 mb-5  rounded' style={{ width: '80%' , height:'auto', backgroundColor:'#708090' ,fontSize:'1.4vw', border:'1px solid #342725' }}>
           <Card.Header>EN VENTE</Card.Header>
  <Card.Img style={{width:'10vw' , margin:'0 auto'}} variant="top" src={mcafee} />
  <Card.Body>
    <Card.Title style={{color:'black'  ,fontSize:'1.4vw'}}> McAfee AntiVirus Plus </Card.Title>
    <Card.Title style={{color:'black' }}> PRIX : 100 DH </Card.Title>
    <Card.Text style={{color:'black'  ,fontSize:'1vw' , fontFamily: 'Bayon, sans-serif'}}>
    <p>{result}</p>
    </Card.Text>
    <Button variant="primary">Plus d'offres...</Button>
  </Card.Body>
</Card>
        </div>
    )
}
