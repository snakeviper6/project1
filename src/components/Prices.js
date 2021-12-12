import React, { Component } from 'react'
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , ListGroup ,Accordion} from "react-bootstrap";
import '../App.css'
export default class Prices extends Component {
    render() {
        return (
            <div className="sidesC">
                <div className="some">
               
                <Card style={{ width: '80%' ,height:'auto', backgroundColor:'#708090' ,fontSize:'1.4vw' ,border:'1px solid #342725' } } className='cardheader shadow-lg p-3 mb-5  rounded' id="pricesspec">
  <Card.Header>TARIF</Card.Header>
  <ListGroup  style={{  backgroundColor:'#708090'}} variant="flush">
    <ListGroup.Item style={{  backgroundColor:'#708090'}}> 30MIN - 5 DH 
    </ListGroup.Item >
    <ListGroup.Item style={{  backgroundColor:'#708090'}}> 1 Heure - 10 DH 
    </ListGroup.Item >
    <ListGroup.Item style={{  backgroundColor:'#708090'}}> 2 Heures - 15 DH 
    </ListGroup.Item >
    <ListGroup.Item style={{  backgroundColor:'#708090'}}> 3 Heures - 20 DH 
    </ListGroup.Item >
    <ListGroup.Item style={{  backgroundColor:'#708090'}}> Photocopie Noire <br/> 1 dh / PAGE
    </ListGroup.Item >
    <ListGroup.Item style={{  backgroundColor:'#708090'}}> Impression Noire <br/> 2 dh/ PAGE
    </ListGroup.Item >
    <ListGroup.Item style={{  backgroundColor:'#708090'}}> Impression couleur <br/> 3 dh / PAGE
    </ListGroup.Item >
    <ListGroup.Item style={{  backgroundColor:'#708090'}}> Scanner 3 dh / page 
    </ListGroup.Item >
  </ListGroup>
</Card>
<Accordion  className="Pricesaccord" defaultActiveKey="" style={{margin:'0 auto'}}>
  <Accordion.Item eventKey="0"  style={{fontSize:'2.5vw' , backgroundColor:'#708090'}}>
    <Accordion.Header  style={{fontSize:'2.5vw' , backgroundColor:'#708090'}}>TARIF</Accordion.Header>
    <Accordion.Body className="accorstuff" style={{fontSize:'2.5vw' , backgroundColor:'#708090'}}>
    30 MIN             - 5 DH <br/>
    1 HEURE            - 10 DH <br/>
    2 HEURES           - 15 DH <br/>
    3 HEURES           - 20 DH <br/>
    PHOTOPIE           - 1 DH / PAGE <br/>
    IMPRESSION NOIRE   - 2 DH / PAGE <br/>
    IMPRESSION COULEUR - 3 DH / PAGE <br/>
    SCANNER            - 3 DH / PAGE <br/>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1"  style={{fontSize:'2.5vw' , backgroundColor:'#708090'}}>
    <Accordion.Header  style={{fontSize:'2.5vw' , backgroundColor:'#708090'}}>HORAIRE DE TRAVAIL</Accordion.Header>
    <Accordion.Body className="accorstuff" style={{fontSize:'2.5vw' , backgroundColor:'#708090'}}>
    LUNDI A JEUDI 
      8h - 14h <br/>
      VENDREDI
      8h - 12h <br/>
      WEEK END
      FERME    <br/>  
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>
   
            </div>
        )
    }
}
