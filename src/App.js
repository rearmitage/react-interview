import './App.css';
import { useState } from 'react'

/**
 * Given the following jsx can you use react state to add the ability to.
 * 
 * 1. Add a new todo to list
 * 2. Toggle a todo
 * 3. Remove a todo from list
 * 
 * Don't worry about styling 
 */

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <form>
        <input type="text"/>
      </form>
      <ul>
        <li>
          one
          <span className='delete-button'>x</span>
        </li>
        <li>
          two
          <span className='delete-button'>x</span>
        </li>
        <li className='checked'>
          three
          <span className='delete-button'>x</span>
        </li>
      </ul>
    </div>
  );
}

export default App;
