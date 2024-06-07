import { useState, useEffect } from 'react';
import {BrowserRouter as Router,Routes, Route,Navigate} from 'react-router-dom';

import "./App.css";

import Navbar from "./components/Navbar";
import Home from './components/Home';
import Ebay from "./components/Ebay";
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';

import {auth} from "./firebase/config";


function App() {
  const [userAuth,setUserAuth]=useState({authIsReady:false,user:null})

  useEffect(()=>{
    let unsub=  auth.onAuthStateChanged((user)=>{
        console.log("authentication",user)
    
        setUserAuth({authIsReady:true,user:user})
        unsub()
    })
    console.log("user",auth)
      
  },[])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home user={userAuth}/>} />
        <Route path="/ebay" element={<Ebay />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
