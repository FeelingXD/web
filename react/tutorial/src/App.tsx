import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import {PersonList} from './components/PersonList';
import {Status} from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import {LoggedIn} from './components/LoggedIn';
import { User } from './components/User';
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
      <Greet name='jimin' message ={5} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='success'/>
      <Oscar>
        <Heading>Place holder</Heading>
      </Oscar>
        <Button handleClick={(event,id) => {
         console.log('clicked!',event,id)
          }
        }
        />
      <Input value='' handleChange={(event)=> console.log(event)}/>
      <Container styles={{border:'1px solid black', padding:'1rem'}}/>
      <LoggedIn/>
      <User/>
    </div>
  )
}

export default App;