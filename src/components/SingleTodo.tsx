import React from 'react'
import {Todo} from './model'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

interface Props{
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {

    const [edit, setEdit] = React.useState<boolean>(false);
    const [editTodo, setEditTodo] = React.useState<string>(todo.todo);

    const handleDone = (id: number) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === id){
                todo.isDone = !todo.isDone;
            }
            return todo;
        })
        setTodos(newTodos);
        console.log(newTodos)
    }

    const handleDelete = (id: number) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        const newTodos = todos.map((todo) => {
            if(todo.id === id){
                todo.todo = editTodo;
            }
            return todo;
        })
        setTodos(newTodos);
        setEdit(false);
    }

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

  return (
    <form action="" onSubmit={(e) => handleEdit(e, todo.id)} className='todos__single'>
        {
            edit? (
                <input 
                ref={inputRef}
                type="text" 
                value={editTodo} 
                onChange={(e) => setEditTodo(e.target.value)} 
                className='todos__single--text'
                />
            ):(
                    todo.isDone?(
                    <s className="todos__single--text">
                    {todo.todo}
                    </s>
                    ):(
                    <span className="todos__single--text">
                    {todo.todo}
                    </span>
                    )
                
            )
        }
        

    <div>
        <span className="icon" onClick={() => {
            if(!edit && !todo.isDone){
                setEdit(!edit)
            }
        }}>
            <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
            <MdDone />
        </span>
    </div>
    </form>
  )
}

export default SingleTodo