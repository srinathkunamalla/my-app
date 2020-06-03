import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
import styled from 'styled-components';

const styedButton = styled.button`
backgroundColor: green,
font: inherit,
border: 1px solid blue,
padding: 8px,
cursor: pointer,
&:hover': {
  backgroundColor: lightgreen,
  color: black
}

`;
 

class App extends Component {
  state = {
    persons: [
      { id: 'a1', name: "Srinath", location: "Bentonville" },
      { id: 'a2', name: "Keerthi", location: "Bentonville" },
      { id: 'a3', name: "Lucky", location: "India" },
    ],
    otherState: "some other value",
    showPersons: false
  }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    person[personIndex] = person;


    this.setState ( {persons: persons});
  }

   switchNameHandler = () => {
    //console.log("Was Clicked!");
    this.setState({
      persons: [
        { name: "Srinath KUNAMALLA", location: "Bentonville" },
        { name: "Keerthi Kunamalla", location: "Bentonville" },
        { name: "Lucky Routhu", location: "India" }
      ],
    });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons =(
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click = {() => this.deletePersonHandler(index)}
            name = {person.name }
            location ={ person.location }
            key = {person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      );
      style.backgroundColor='red';
      style['hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <=2 ) {
      classes.push('red');
    }
    if (this.state.persons.length <=1 ) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Srinath Kunamalla</h1>
          <p className={classes.join(' ')}>React Programmer</p>
            <styedButton 
            style = {style}
            onClick={this.togglePersonHandler}>Click me</styedButton>
            {persons}
            <Person name="Srinath Kunamalla">
              My Hobbies: Gaming          </Person>
          </header>
      </div>
    );
  };

}

export default App;
