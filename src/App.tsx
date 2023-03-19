import React from 'react';
import {Todo} from './components/model';
import Inputfield from './components/Inputfield';
import './App.css';


const App: React.FC = () => {

  const [todo, setTodo] = React.useState<string | number>("");
  const [todos, setTodos] = React.useState<Todo[]>([]);

  return (
    <div className="App">
      <span className='heading'>Tasktify</span>
      <Inputfield todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
