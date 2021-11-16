import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter ,ImageHeader} from 'react-simple-card';
export default class Prices extends Component {
    render() {
        return (
            <div className="sidesC">
                <div className="some">
               <Card>
        <CardHeader className="cardheader">Horaire de travail</CardHeader>
        <CardBody className="cardbody" >
            <p><b>Lundi a jeudi</b><br /> 8H-14h </p><br />
        <p><b> Vendredi</b> <br /> 8H-12H </p><br />
        <p><b> WEEK-END</b> <br /> FERME </p><br />
        
        </CardBody>
        
    </Card>
    </div>
   
            </div>
        )
    }
}
