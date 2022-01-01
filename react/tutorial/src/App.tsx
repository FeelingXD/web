import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import {PersonList} from './components/PersonList';
function App() {
  const personName={
    first:'Bruce',
    last:'Wayne' ,
  }
  const nameList =[
    {
      first:'Bruce',
      last:'Wayne',
    }
    ,
    {
      first:'jimin',
      last:'go',
    }
  ]
  return (
    <div className='App'>
      <Greet name='jimin' message={10} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
