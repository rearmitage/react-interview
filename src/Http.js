import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
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
  const [loading, setLoading] = useState(null)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
      callApi()
  }, [])

  async function callApi() {
    setLoading(true)
    const res = await axios.get('https://swapi.dev/api/people/1')
    console.log(res.data)
    setData(res.data)
    setLoading(false)
    setError(false)
  }

  if(loading) {
      return <h1>Loading . . . </h1>
  }

  if(error) {
      <h1>Sorry there was an error</h1>
  }

  return (
        <code>
            {JSON.stringify(data, null, 1)}
        </code>
  );
}

export default App;
