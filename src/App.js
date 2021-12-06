import Layout from './components/Layout.js';
import SearchBar from './components/SearchBar.js';
import React, { useState , useEffect } from 'react'
import axios from 'axios';
import VidyardEmbed from '@vidyard/embed-code';
import About from './About.js'
import Services from './Services.js'
import Procedure from './Procedure.js'
import Impression from './Impression.js'
import Cv from './Cv.js'
import Notfound from './Notfound.js'
import Home from './App.js'

import PrintForm1 from './components/PrintForm1.js'


import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css';
/*const makeAPICall = async () => {
  try {
    const response = await fetch('http://localhost:8080/', {mode:'cors'});
    const data = await response.json();
    console.log({ data })
  }
  catch (e) {
    console.log(e)
  }
}
useEffect(() => {
  makeAPICall();
}, [])*/

function App(props) {
  
console.log('finally');
const[userNow,setuserNow]=useState("Visiteur");  

/*
useEffect(() => {
  if(userNow !=="Visiteur"){
  axios.post('https://service.cyberbadr.com/login', {
    username: 'Kyle',
    
  })
  .then(function (response) {
    console.log(response.data.accessToken);
    
    localStorage.setItem('token',response.data.accessToken);
   
    console.log(localStorage.getItem('token'));
  
   get();
  
  })
  .catch(function (error) {
    console.log(error);
  });
  
  
 const get=()=>{ 
   
  let auth= localStorage.getItem('token');
  let config = {
    headers: { Authorization: `Bearer ${auth}` }
};
  axios.get('https://service.cyberbadr.com/data',
    config )
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}
  }
}, [userNow]) 

*/


  return (
    <Router>
    <div className="App">
     
     <Layout  changeIt={userNow=>setuserNow(userNow)}
         userNow={userNow}>
      
     <Switch>
     <Route exact path="/">
       <SearchBar/>
       
       <PrintForm1 
        
         userNow={userNow}
         />
      </Route>
      
             <Route path="/services">

              <Services/>
              </Route>
              <Route path="/impressions">

              <Impression/>
              </Route>
              <Route path="/cv">
               <Cv/>
              
              </Route>
              
      
             <Route path="/procedure">

              <Procedure/>
              </Route>
              <Route path="/about">
        <About/>
        </Route>
              <Route >

<Notfound/>
</Route>
</Switch>
     </Layout>
    </div>
    </Router>
            
  );
}

export default App;
