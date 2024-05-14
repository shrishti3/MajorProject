import './App.css';
import React from 'react';
import "tailwindcss/tailwind.css";
import Home from "./pages/Home";
import Therapist  from './pages/Therapist';
import Therapist_detail from './pages/Therapist_detail';
import Podcast from './pages/Podcast';
import Meditate from './pages/Meditate';
import Games from  './pages/Games';
import Article from './pages/Article';
import RegisterPeople from './pages/RegisterPeople';
import {
	Routes,
	Route,
	BrowserRouter as Router,
	Navigate,
} from "react-router-dom";
import UploadImage from './pages/UploadImage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/therapist" element={<Therapist />}/>
      <Route path="/therapistSearch" element={<Therapist_detail />}/>
      <Route path="/podcast" element={<Podcast/>}/>
      <Route path='/pomrodo' element={<Meditate />} />
      <Route path='/games' element={<Games />} />
      <Route path='/articles' element={<Article/>} />
      <Route path='/upload' element={<UploadImage/>} />
      <Route path='RegisterPeople' element={<RegisterPeople/>}/>
    </Routes>
  </Router>
  );
}

export default App;
