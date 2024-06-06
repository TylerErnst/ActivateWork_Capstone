import {BrowserRouter as Router,Routes, Route,Navigate} from 'react-router-dom';

import "./App.css";

import Navbar from "./components/Navbar";
import Ebay from "./components/Ebay";


const BASE_URL = import.meta.env.DEV
  ? "http://localhost:8080/api/searches"
  : ""; // Deploy Link

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Ebay />} />
      </Routes>
    </Router>
  );
}

export default App;
