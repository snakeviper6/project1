import React, { Component } from 'react'

import { Card,ImageHeader} from 'react-simple-card';
import '../App.css'
import m5 from '../img/moahmed5.jpg'
import h2 from '../img/hassan2.jpg'
import mar from '../img/mark.png'
import m6 from '../img/moh6.png'
import hassan3 from '../img/h3.jpg'
export default class King extends Component {
    render() {
        return (
 <div className="kingcontainer">

<div className="eachking">
            {/*  <Card>
       
            <ImageHeader  className="imgH" imageSrc={m5} />
        
    </Card> */}
    <img className="kingimg" src={m5} alt="Logo" />
    </div>
    <div className="eachking">
          {/*    <Card>
        <ImageHeader className="imgH"  imageSrc={h2} />
        
    </Card> */}
    <img className="kingimg" src={h2} alt="Logo" />
    </div>
    <div className="eachking">
          {/*    <Card>
        <ImageHeader className="imgH" imageSrc={mar} />
        
    </Card> */}
    <img className="kingimg" src={mar} alt="Logo" />
    </div>
    <div className="eachking">
            {/*  <Card>
        <ImageHeader  className="imgH" imageSrc={m6} />
        
    </Card> */}
    <img className="kingimg" src={m6} alt="Logo" />
    </div>
    <div className="eachking">
            {/* <Card>
         <ImageHeader className="imgH"   imageSrc={hassan3} />
         </Card>
         */}
        
      <img className="kingimg" src={hassan3} alt="Logo" />
    
    </div>



 </div>
        )
    }
}