import React from 'react'
import './styles.css'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}

const Inputfield: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
        <form action="" onSubmit={handleAdd} className='input'>
            <input 
            type="input" 
            placeholder='Enter a task' 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className='input__box' />
            <button className='input__submit' type='submit'>Go</button>
        </form>
  )
}

export default Inputfield