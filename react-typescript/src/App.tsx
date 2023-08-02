import React from 'react';
import './App.css';
import Props from './components/Props';
import PersonsList from './components/PersonsList';
import Status from './components/Stats';
import Heading from './components/Heading';
import NewTag from './components/NewTag';

function App() {
  let name : string = "Mohit";
  let userAuth : boolean = true;
  let NameList = [
      {
        first : "John",
        last : "Doe"
      },
      {
        first : "Rahina",
        last : 'malik'
      },
      {
        first : "Abhishek",
        last : "malan"
      }
  ]

  return (
    <div className="App">
      <Props name="mohit" isLoggedIn={userAuth}/>
      <PersonsList names={NameList}/>
      <Status status="loading"/>
      <Heading>This is Heading section.</Heading>
      <NewTag>
        <Heading>This is new Tag</Heading>
      </NewTag>
    </div>
  );
}

export default App;
