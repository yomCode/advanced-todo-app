import React from 'react';
import './App.css';
import Inputfield from './components/Inputfield';

const App: React.FC = () => {

  const [todo, setTodo] = React.useState<string | number>("");

  return (
    <div className="App">
      <span className='heading'>Tasktify</span>
      <Inputfield todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
