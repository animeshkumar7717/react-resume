import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Pages from './pages';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Pages />
    </BrowserRouter>
  );
}

export default App;