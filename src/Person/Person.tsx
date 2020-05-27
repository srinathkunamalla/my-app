import React from 'react';


const person =(props) => {
    return (
    <div>
        <p onClick={props.click}>This is a {props.name} and I live in City: {props.location}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
    )
};

export default person;