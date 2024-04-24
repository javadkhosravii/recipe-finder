import React from 'react';
import './components/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Meal from './components/Meal';
import Recipe from './components/Recipe';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route  path="/" element={<Meal/>}/>
          <Route exact path="/:recipeId" element={<Recipe/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App;