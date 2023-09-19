import React from 'react';
import './App.css';
import ProjectsPage from './Projects/ProjectsPage';
import Author from './Projects/Author';
import Header from '../src/Projects/Header';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import HomePage from './home/HomePage';


function App() {
  return (
    <Router>
      <Header></Header>
      <header className="sticky">
        <span className="logo">
          <img src="" alt="logo" width="49" height="99"/>
        </span>
        <NavLink to="/"  className="button rounded">
          <span className="icon-home"></span>
           Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
           Projects
        </NavLink>
        <NavLink to="/author" className="button rounded">
           Author
        </NavLink>
      </header>

        <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/author" element={<Author/>} />
            </Routes>
         </div>
    </Router>
      );
  }

export default App;
