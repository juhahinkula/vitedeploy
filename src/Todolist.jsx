import { useState } from 'react';
import Todotable from './Todotable';

function Todolist() {
  const [desc, setDesc] = useState('');
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setDesc(event.target.value);
  }
  
  const addTodo = (event) => { 
    setTodos([...todos, desc]);
  }

  return (
    <>
      <input type="text" placeholder="Description" onChange={inputChanged} value={desc}/>
      <button onClick={addTodo}>Add</button>
      <Todotable rows={todos} />
    </>
  );
}

export default Todolist;