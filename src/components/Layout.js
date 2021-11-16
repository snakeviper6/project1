import React from 'react'
import '../App.css'
import Footer from './Footer.js'
import Myclock from './Myclock.js'
import Top from './Top.js'

export default function Layout(props) {
    console.log(props);
    return (
        <div className="App-header">
        <div className="top">
            <Top/>
            {/*<Myclock/>*/}
        </div>
        <div className="main">
        <div className="row1">
          
        </div>
        <div className="mrow">
           {props.children}
        </div>
        <div className="row3">
           
            </div></div>
        <div className="footer">
            <Footer/>
        </div>
      </div>
    )
}
