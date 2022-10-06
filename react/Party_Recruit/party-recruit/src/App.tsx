import React from 'react';
import './App.css';
import Body from './Component/Body';
import Footer from './Component/Footer';
import Header from './Component/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
     <Header/>
     <Body/>
     <Footer/>
   </div>
  );
}
export default App;
