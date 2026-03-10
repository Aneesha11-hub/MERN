import React from 'react'
import User from './components/User'
import Parent from './components/Parent'
import State from './hooks/State'
import Form from './hooks/Form'
import Conditional from './components/Conditional'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import {createContext} from 'react'
import Reducer from './hooks/Reducer'


export const userContext=createContext()
const App = () => {
  const name='xyz'
  return (

    
  <>
    
    <Navbar />
    <userContext.Provider value={{name}}>
    <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/services/:id" element={<ProductDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
    </Routes>
    <Reducer />
    </userContext.Provider>
   
    
  </>
  

   
    
    /*
    <div>APP</div>
    <h1>Details</h1>
    <User name="harshitha" age={21} skills={["HTML","CSS","JS","JAVA"]}/>
    <hr/>
    <br></br>
    <hr/>
    <State/>
   <Conditional/>
    <hr/>
    <State />
    <hr />
    <Form/>
    <hr/>*/ /*here hr is a horizontal rule tag that creates the horizontal line between paragraphs*/
  )
}


export default App

//react-router-dom=>is a routing library that helps to navigate between pages without reloading