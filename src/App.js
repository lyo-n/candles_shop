import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header/header';
import Main from './Components/main/main';
import Footer from './Components/footer/footer';

function App() {
  return (
    <React.Fragment>
    <Header/> 
    <Main/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
