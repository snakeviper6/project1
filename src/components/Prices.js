import React, { Component } from 'react'
import { render } from 'react-dom';
import { Card, CardHeader, CardBody, CardFooter ,ImageHeader} from 'react-simple-card';
import '../App.css'
export default class Prices extends Component {
    render() {
        return (
            <div className="sidesC">
                <div className="some">
               <Card>
        <CardHeader className="cardheader">TARIF</CardHeader>
        <CardBody className="cardbody" >
            <p><b>30MIN</b><br /> 5DH </p><br />
        <p><b>1 HEURE</b> <br /> 10DH </p><br />
        <p><b>2 HEURES</b> <br /> 15 DH </p><br />
        <p><b>3 HEURES</b> <br /> 20DH </p><br />
        <p><b>IMPRESSION NOIRE</b> <br /> 2 DH /Page </p><br />
        <p><b>IMPRESSION COULEUR</b> <br /> 3 DH /page </p><br />
        <p><b>PHOTOCOPIE NOIR</b> <br /> 1 DH </p><br />
        <p><b>SCANNER COULEUR </b><br />  3 DH </p><br />
        </CardBody>
        
    </Card>
    </div>
   
            </div>
        )
    }
}
