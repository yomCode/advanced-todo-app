import React from 'react';
import {Todo} from './components/model';
import Inputfield from './components/Inputfield';
import './App.css';


const App: React.FC = () => {

  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<Todo[]>([]);


  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      setTodo("");
    }
    return;
  }

  console.log(todos)

  return (
    <div className="App">
      <span className='heading'>Tasktify</span>
      <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAddTodo} />
    </div>
  );
}

export default App;
