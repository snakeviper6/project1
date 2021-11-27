import Layout from './components/Layout.js';
import SearchBar from './components/SearchBar.js';
import React, { useState } from 'react'
import axios from 'axios';
import VidyardEmbed from '@vidyard/embed-code';
import About from './About.js'
import Services from './Services.js'
import Notfound from './Notfound.js'
import Home from './App.js'

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css';
axios.get('https://service.cyberbadr.com/posts')
  .then(function (response) {
    // handle success
    console.log(response.data[0]);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

function App() {
  return (
    <Router>
    <div className="App">
     
     <Layout>
      
     <Switch>
     <Route exact path="/">
       <SearchBar/>
      </Route>
      <Route path="/about">
        <About/>
        </Route>
             <Route path="/services">

              <Services/>
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
