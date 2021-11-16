import React from 'react'
import '../App.css'
import Footer from './Footer.js'
import Prices from './Prices.js'
import Horaire from './Horaire.js'
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
          <Prices/>
        </div>
        <div className="mrow">
           {props.children}
        </div>
        <div className="row3">
           <Horaire/>
            </div></div>
        <div className="footer">
            <Footer/>
        </div>
      </div>
    )
}
