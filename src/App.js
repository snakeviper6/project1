import Layout from './components/Layout.js';
import SearchBar from './components/SearchBar.js';
import React, { useState } from 'react'


import './App.css';

function App() {
  return (
    <div className="App">
     <Layout>
       
       <SearchBar/>
     </Layout>
    </div>
  );
}

export default App;
