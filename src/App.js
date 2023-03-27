import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Switch } from '@chakra-ui/react'
import Navi from './navigation';
import Intro from './intro';
import Data from './data';
import Contact from './contact';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // let path
  // switch (window.location.pathname) {
  //   case "/pw_takehome/":
  //     path = <Intro />
  //     break
  //   case "/pw_takehome/data":
  //     path = <Data />
  //     break
  //   case "/pw_takehome/contact":
  //     path = <Contact />
  //     break
  // }
  return (
   
    <BrowserRouter>
      <div>
      <Navi />
       <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/data" element={<Data />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
      </div>
       
    </BrowserRouter>
      
    
  );

}

export default App;
