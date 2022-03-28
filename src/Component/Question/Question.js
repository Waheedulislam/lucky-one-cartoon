import React from 'react';
import './Question.css'
const Question1 = () => {
    return (
        <div >
            <hr />
            <p className='qus'> React is a JavaScript library. Not a framework, that creates user interfaces (UIs) in a predictable and efficient way using declarative code. React is a JavaScript library. Not a framework, that creates user interfaces (UIs) in a predictable and efficient way using declarative code. It designs simple views for each state in application, and React will efficiently update and render just the right component when data changes.</p>
            <hr />
            <p className='qus'>
                useState is a Hook that allows have state variables in functional components. the initial state to this function and it returns a variable with the current .React keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component .The initial value as an argument to the useState function.When React first runs  component, useState will return the two-element array as usual but will assign the initial value to the first element of the array.
            </p>
        </div >
    );
};

export default Question1;