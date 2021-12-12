import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Card , ListGroup } from "react-bootstrap";
import Advertize1 from './Advertize1.js'
export default class Prices extends Component {
  
    render() {
        return (
            <div className="sidesC">
                <div className="some">
              
                <Card  className='cardheader shadow-lg p-3 mb-5  rounded' style={{ width: '80%' , height:'auto', backgroundColor:'#708090' ,fontSize:'1.4vw', border:'1px solid #342725' } } >
  <Card.Header>HORAIRE DE TRAVAIL</Card.Header>
  <ListGroup  style={{  backgroundColor:'#708090'}} variant="flush">
    <ListGroup.Item style={{  backgroundColor:'#708090'}}>LUNDI A JEUDI <br/>
    8h - 14h
    </ListGroup.Item >
    <ListGroup.Item style={{  backgroundColor:'#708090'}}>VENDREDI<br/>
    8h - 12h
    </ListGroup.Item>
    <ListGroup.Item style={{  backgroundColor:'#708090'}}>WEEK END <br/>
    FERME
    </ListGroup.Item>
  </ListGroup>
</Card>
<Advertize1/>
    </div>
   
            </div>
        )
    }
}
