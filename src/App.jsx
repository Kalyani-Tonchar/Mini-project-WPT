import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import Team from './pages/Team'; 
import FeedbackForm from  './pages/FeedbackForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: ' #FFFFFF' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/team" element={<Team />} />
        <Route path="/feedback" element={<FeedbackForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
