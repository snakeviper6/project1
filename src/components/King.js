import React, { Component } from 'react'
import { render } from 'react-dom';
import { Card,ImageHeader} from 'react-simple-card';
import '../App.css'
import m5 from '../img/moahmed5.jpg'
import h2 from '../img/hassan2.jpg'
import mar from '../img/flag.png'
import m6 from '../img/moh6.png'
import hassan3 from '../img/h3.jpg'
export default class King extends Component {
    render() {
        return (
 <div className="kingcontainer">

<div className="eachking">
            <Card>
       
            <ImageHeader imageSrc={m5} />
        
    </Card>
    </div>
    <div className="eachking">
            <Card>
        <ImageHeader imageSrc={h2} />
        
    </Card>
    </div>
    <div className="eachking">
            <Card>
        <ImageHeader imageSrc={mar} />
        
    </Card>
    </div>
    <div className="eachking">
            <Card>
        <ImageHeader imageSrc={m6} />
        
    </Card>
    </div>
    <div className="eachking">
            <Card>
        <ImageHeader   imageSrc={hassan3} />
        {/*<img className="kingimg" src={m5} alt="Logo" />*/}
        
    </Card>
    </div>



 </div>
        )
    }
}