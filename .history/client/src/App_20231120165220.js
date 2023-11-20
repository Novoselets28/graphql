import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AccountMenu from './components/MenuBar';

function App() {
  return (
    <Router>
      <AccountMenu/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
