import React, { useState } from 'react';
import {auth} from "../firebase/config";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({setUser}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async(event) => {
    event.preventDefault();
    // Here you can call your signup API
    try {
      
      console.log(`Email: ${email}, Password: ${password}`);
      let res = await signInWithEmailAndPassword(auth,email,password);
      console.log("🚀 ~ handleSubmit ~ res:", res);
      // setUser(res.user)
      setUser({authIsReady:true,user:res.user});
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      console.log("err",error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Log in</h1>
      <label>
        Email:
        <input 
            type="text" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
        />
      </label>
      <label>
        Password:
        <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
        />
      </label>
      <input type="submit" value="Log in" />
    </form>
  );
}

export default Login;