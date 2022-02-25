import './App.css';
import { useState } from 'react'

function App() {
  
  return (
    <div className="App">
      <h1>Todo list</h1>
      <input type="text"/>
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


// function App() {
//   const [todos,setTodos] = useState([])
//   // const [checked, setChecked] = useState([])
//   const [textBox, setTexBox] = useState('')

//   const onSubmit = (e) => {
//     e.preventDefault()
//     setTodos([...todos, {name: textBox, checked: false}])
//     setTexBox('')
//   }

//   const handleDelete = (x) => {
//     let i = todos.indexOf(x)
//     let todoCopy = [...todos]
//     todoCopy.splice(i, 1)
//     setTodos(todoCopy)
//   }

//   const toggleChecked = (x) => {
//     let i = todos.indexOf(x)
//     let todoCopy = [...todos]
//     todoCopy[i].checked = !todoCopy[i].checked
//     setTodos(todoCopy)
//   }


//   return (
//     <div className="App">
//       <h1>ToDo list</h1>
//       <form onSubmit={onSubmit}>
//         <input type="text" value={textBox} onChange={x => {
//           setTexBox(x.target.value)
//         }}/>
//       </form>
//       <ul>
//         {todos.map(x => (
//           <li key={x.name}>
//             <span
//               className={x.checked ? 'checked' : ''} 
//               onClick={() => toggleChecked(x)}
//               >{x.name}
//             </span>
//             <span className='delete-button' onClick={() => handleDelete(x.name)}>x</span>
//           </li>) 
//         )}
//       </ul>
//     </div>
//   );
// }

export default App;
