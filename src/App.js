import './App.css';
import { useState } from 'react';

const Square = ({title}) =>{
  return (
    <div className='square-style'>
      {title}
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {id:1, title:"Let's learn React"}
  ])

  const [newTodo, setNewTodo] = useState('');
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  const addNewTodo = () =>{
    setTodos([...todos, {title: newTodo, id: Date.now()}]);
  };

  return (
    <div>
        <div className='center'>
        <input value={newTodo} onChange={handleChange}/>
        <button onClick={addNewTodo}>Add</button>
        </div>

        <h1>Todo List</h1>
        <div className='list-container'>
            {todos.map((todo) => {
              return <Square 
                  title={todo.title}
                  key={`todo-${todo.id}`}/>
            })}
        </div>
      </div>
  );
}

export default App;
