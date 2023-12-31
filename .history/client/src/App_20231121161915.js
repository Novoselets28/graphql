import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <Router>
      <MenuBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
