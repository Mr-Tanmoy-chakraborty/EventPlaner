import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Planner from './Planner'
import MyEvents from './MyEvents'
import About from './About'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {


  return (
    <>
     <Router>
      <Nav/>
      <Routes>
        <Route exact path="/"element={<Home/>}/>
        <Route exact path="/Planner"element={<Planner/>}/>
        <Route exact path="/MyEvents" element={<MyEvents/>}/>
        <Route exact path="/About" element={<About/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
