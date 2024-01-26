import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Project from './components/Project'
import Contact from './components/Contact'
import ProjectGallery from './components/ProjectGallery';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/projects" element={<ProjectGallery/>}/>
        <Route path="/project/:id" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;