import React from 'react'
import {GoogleLogin,GoogleLogout}  from 'react-google-login';

import { useState } from 'react';

import {Link} from 'react-router-dom'
//import Layout from './Layout.js'


export default function Menu(props) {
const[showLoginButton,setshowLoginButton]=useState(true);
const[showLogoutButton,setshowLogoutButton]=useState(true);

console.log('this is props');
    console.log(props);

    const responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
        console.log(response.profileObj.email);
       props.setuserNow(response.profileObj.email);
        setshowLoginButton(false);
        setshowLogoutButton(true);
    }
    const responseGoogle2=(response)=>{
        console.log(response);
        console.log("you are out");
    }
    const signOut=(response2)=>{
      //  console.log(response);
       
        //console.log("you are out");
        setshowLoginButton(true);
        setshowLogoutButton(false);
        //console.log(response2);
        console.log("you are out");
      props.setuserNow("Visiteur");
    }
        
        


    
       

    
    return (
       
            <div className="navlinks">

            <Link   style={{ textDecoration: 'none' }} className="links" to="/">Acceuil</Link>
            <Link  style={{ textDecoration: 'none' }} className="links" to="/about">A propos</Link>
            <Link   style={{ textDecoration: 'none' }}  className="links" to="/services">Services</Link>
           
            {showLoginButton?
            <GoogleLogin
clientId="744728563906-uuc7q553oj5uenh8svpvu0pfi874q23v.apps.googleusercontent.com"

buttonText="Login"
onSuccess={responseGoogle}
onFailure={responseGoogle2}
cookiePolicy={'single_host_origin'}
isSignedIn={true}

/> :null} 
  {props.userNow}
            

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
    <span></span>

            </div>


           
       
    )
}
