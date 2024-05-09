import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// pages
import Home from './pages/home';
import Clock from './pages/projects/Clock';
import Stopwatch from './pages/projects/Stopwatch';
import SplitScreen from './pages/projects/split-screen';
import Counter from './pages/projects/counter';
import Todo from './pages/projects/Todo';
import RandomColors from './pages/projects/random-colors';
import PxToREM from './pages/PxToREM';
import AgeCalculator from './pages/projects/AgeCalculator';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clock" element={<Clock/>}/>
        <Route path="/stopwatch" element={<Stopwatch/>}/>
        <Route path="/split-screen" element={<SplitScreen/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/random-colors" element={<RandomColors/>}/>
        <Route path="/px-to-rem" element={<PxToREM/>}/>
        <Route path="/age-calculator" element={<AgeCalculator/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;