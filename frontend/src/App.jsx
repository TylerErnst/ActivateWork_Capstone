import { useState, useEffect } from 'react';
import {BrowserRouter as Router,Routes, Route,Navigate} from 'react-router-dom';

import "./App.css";

import Navbar from "./components/Navbar";
import Home from './components/Home';
import Ebay from "./components/Ebay/Ebay";
import CheckedList from "./components/Ebay/CheckedList"
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
      <Navbar user={userAuth} setUser={setUserAuth}/>
      <Routes>
        <Route path="/" element={<Home user={userAuth}/>} />
        <Route path="/searches/:pageNumber" element={<Ebay user={userAuth}/>} />
        <Route path="/list/:pageNumber" element={<CheckedList user={userAuth} />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp setUser={setUserAuth}/>} />
        <Route path="/login" element={<Login setUser={setUserAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
