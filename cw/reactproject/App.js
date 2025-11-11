import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './intro';
import Form from './formreact';
import Dio from './DioBrando';
import Josuke from './JosukeHigashikata';
import Fix from './fixerror';
import Welcome from './welcome';
import { allPeople, uniqueSources } from './PeopleData';
import PeopleFilter from './PeopleFilter';
import * as People from './PeopleData';
import DisplayPeople from './DisplayPeople';
import Popup from './PopUp';
import Child from './Child';


function App() {
  const [selectedSource, setSelectedSource] = useState('All');

      const filteredPeople =
        selectedSource === 'All'
          ? allPeople
          : allPeople.filter(p => p.source === selectedSource);

  const [showPopup, setShowPopup] = useState(false);
  var [count1, setCount1] = useState(100);
  var [count2, setCount2] = useState(100);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
        You thought it was going to be Akash Agarwal, but it was me! Dio!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <Intro />

      <Form />

      <Dio />

      <Josuke />

      <Fix />

      <Welcome name = "Kujo Jotaro"/>

      <DisplayPeople list = {null} />
      <DisplayPeople />
      <DisplayPeople list = {People} />
      <DisplayPeople list = {People.dio} />

      

      
    <PeopleFilter
      selectedSource={selectedSource}
      setSelectedSource={setSelectedSource}
      uniqueSources={uniqueSources}
      filteredPeople={filteredPeople}
    />
      
    <button onClick={()=>setShowPopup('1')}>Pop-Up 1</button>
    {showPopup === '1' && (
      <Popup
        title="You thought this was going to be a Pop-Up, but it's me! Dio!"
        onClose={() => setShowPopup(false)}
      />
    )}


    <button onClick={()=>setShowPopup('2')}>Pop-Up 2</button>
    {showPopup === '2' && (
      <Popup
        title="Did you know you have rights? The Constitution says you do!"
        onClose={() => setShowPopup(false)}
      />
    )}

    <Child 
    count1 = {count1} 
    onIncrement = { () => setCount1(count1 + 1)}
    onDecrement = { () => setCount1(count1 - 1)}
    />
    
    


    
    

 


    </div>
  );
}

export default App;
