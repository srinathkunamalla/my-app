import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

const App = props => {
  const [personState, setPersonsState] = useState({
    persons: [
      { name: "Srinath", location: "Bentonville" },
      { name: "Keerthi", location: "Bentonville" },
      { name: "Lucky", location: "India" },
    ]
  });

  const switchNameHandler = () => {
    //console.log("Was Clicked!");
    setPersonsState({
      persons: [
        { name: "Srinath KUNAMALLA", location: "Bentonville" },
        { name: "Keerthi Kunamalla", location: "Bentonville" },
        { name: "Lucky Routhu", location: "India" }
      ]
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Srinath Kunamalla</h1>
        <p>React Programmer</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person
          name={personState.persons[0].name}
          location={personState.persons[0].location}
        />
        <Person
          name={personState.persons[1].name}
          location={personState.persons[1].location}
        />
        <Person
          name={personState.persons[2].name}
          location={personState.persons[2].location}
        />
        <Person name="Srinath Kunamalla">
          My Hobbies: Gaming          </Person>
      </header>
    </div>
  );
};

export default App;
