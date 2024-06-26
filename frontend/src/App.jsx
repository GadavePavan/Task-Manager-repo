import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos") // Corrected 'fetcg' to 'fetch'
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch(error => console.error('Error fetching todos:', error));
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
