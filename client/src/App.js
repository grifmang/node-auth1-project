import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  return (
    <>
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    </>
  );
}

export default App;
