import React from 'react';
import {Todo} from './components/model';
import Inputfield from './components/Inputfield';
import './App.css';
import TodoList from './components/TodoList';
import { DragDropContext } from 'react-beautiful-dnd';



const App: React.FC = () => {

  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = React.useState<Todo[]>([]);


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
    < DragDropContext onDragEnd={() => {}}> 
      <div className="App">
        <span className='heading'>Tasktify</span>
        <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAddTodo} />
        <TodoList 
          todos={todos} 
          setTodos={setTodos} 
          setCompletedTodos={setCompletedTodos}
          completedTodos={completedTodos}  
        />
      </div>
    </DragDropContext>
  );
}

export default App;
