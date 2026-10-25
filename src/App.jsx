import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from './components/layout/Layout.jsx';
import Home from './components/sections/Home.jsx';
import About from './components/sections/About.jsx';
import Projects from './components/sections/Projects.jsx';
import Contact from './components/sections/Contact.jsx';

// import AllProjects from './components/sections/Allproject.jsx'; // intentionally disabled

function HomePage() {
  return (
    <Layout>
      <Home />
      <Projects />
      <About />
      <Contact />
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
