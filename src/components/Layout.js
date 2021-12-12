import React from 'react'

import Footer from './Footer.js'
import Prices from './Prices.js'
import Horaire from './Horaire.js'
import Top from './Top.js'


import '../App.css'
import { Nav, Navbar, NavDropdown ,NavItem } from 'react-bootstrap'
import {GoogleLogin,GoogleLogout}  from 'react-google-login';

import { LinkContainer } from 'react-router-bootstrap'
import { useState } from 'react';

//import {Link} from 'react-router-dom'


export default function Layout(props) {
  console.log('this is props');
  console.log(props);

  const responseGoogle=(response)=>{
      console.log(response);
     // console.log(response.profileObj);
      //console.log(response.profileObj.email);
     props.changeIt(response.profileObj.email);
      setshowLoginButton(false);
      setshowLogoutButton(true);
  }
  const responseGoogle2=(response)=>{
     // console.log(response);
      //console.log("you are out");
  }
  const signOut=(response2)=>{
    //  console.log(response);
     
      //console.log("you are out");
      setshowLoginButton(true);
      setshowLogoutButton(false);
      //console.log(response2);
      console.log("you are out");
    props.changeIt("Identifiez-vous");
  }
  function overrideToggle() {
   // console.log("TOGGLE TRIGGERED...")
    setExpanded(prevExpanded => !prevExpanded)
    //const width =window.innerWidth;
    //alert(width);
    console.log('something');
}  
function closeNav() {
  // console.log("TOGGLE TRIGGERED...")
  // setExpanded(false);
  setExpanded(prevExpanded => !prevExpanded)
   //const width =window.innerWidth;
   //alert(width);
   console.log('something');
} 
//onToggle={overrideToggle}
const[showLoginButton,setshowLoginButton]=useState(true);
const[showLogoutButton,setshowLogoutButton]=useState(false);
const [expanded, setExpanded] = useState(false)
    return (
    
        <div className="lay">
      <div className="top">
        <Top/>
            {/*<Myclock/>*/}
        </div>
        <div className="navC"> 
        
        <div className="navlinks">
    
        <Navbar id="navbar" className="navbar"    expand="lg" collapseOnSelect   expanded={expanded} onToggle={overrideToggle} >
       {/* <Navbar.Toggle className="coloring" aria-controls="basic-navbar-nav" />
      
            <Navbar.Collapse>
            
            </Navbar.Collapse>*/}
            <Navbar.Toggle className="coloring"  style={{border:'1px solid black'}}  />
            <Navbar.Collapse>
          <Nav id="navnav">
{/*

<Link   style={{ textDecoration: 'none' }} className="links" to="/">Acceuil</Link>
<Link   style={{ textDecoration: 'none' }}  className="links" to="/services">Services</Link>
<Link   style={{ textDecoration: 'none' }}  className="links" to="/impressions">Mes Impressions</Link>
<Link   style={{ textDecoration: 'none' }}  className="links" to="/cv">Mon CV</Link>
<Link   style={{ textDecoration: 'none' }}  className="links" to="/procedure">Procedures</Link>
    <Link  style={{ textDecoration: 'none' }} className="links" to="/about">A propos</Link>*/}
    
  <LinkContainer to="/">
<NavItem   style={{ textDecoration: 'none' ,color:'white' }} className="links"  onClick={() => setExpanded(false)} >Acceuil</NavItem>
</LinkContainer>
<LinkContainer to="/services">
<NavItem   style={{ textDecoration: 'none' }}  className="links"  onClick={() => setExpanded(false)} >Services</NavItem>
</LinkContainer>
<LinkContainer to="/impressions">
<NavItem   style={{ textDecoration: 'none' }}  className="links" onClick={() => setExpanded(false)} >MES Impression</NavItem>
</LinkContainer>
<LinkContainer to="/cv">
<NavItem   style={{ textDecoration: 'none' }}  className="links"  onClick={() => setExpanded(false)} >MON CV</NavItem>
</LinkContainer>
<LinkContainer to="/procedure">
<NavItem   style={{ textDecoration: 'none' }}  className="links" onClick={() => setExpanded(false)} >PROCEDURES ADMINISTRATIVES</NavItem>
</LinkContainer>
<LinkContainer to="/about">
<NavItem   style={{ textDecoration: 'none' }}  className="links"  onClick={() => setExpanded(false)}>A PROPOS</NavItem>
</LinkContainer>

</Nav>
</Navbar.Collapse>    

      </Navbar>

</div>

       <div className="navlinks2" >
        {props.userNow} 
      
       {showLoginButton?
      
<GoogleLogin
clientId="744728563906-uuc7q553oj5uenh8svpvu0pfi874q23v.apps.googleusercontent.com"

buttonText="Login"
onSuccess={responseGoogle}
onFailure={responseGoogle2}
cookiePolicy={'single_host_origin'}
isSignedIn={true}

/> :null} 



{showLogoutButton ?
<GoogleLogout
clientId="744728563906-uuc7q553oj5uenh8svpvu0pfi874q23v.apps.googleusercontent.com"
buttonText="Logout"
onLogoutSuccess={signOut}
onLogoutFailure={err => console.log(err)}
isSignedIn={false}
>
</GoogleLogout> 
:null}

       
         </div> 
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
