import React, { useState } from 'react'

const TodoForm = ({createTodo}) => {
    const [todoItem,setTodoItem] = useState('')
    const handleChange = (e) => {
        setTodoItem(e.target.value)
    }
    const handleSubmit =(e) => {
        e.preventDefault();
        if(todoItem.trim())  createTodo(todoItem)
        setTodoItem('')
    }
  return (
   <form onSubmit={handleSubmit} className='flex'>
     <input type="text" value={todoItem} onChange={handleChange} className='bg-white flex-1 px-4 outline-none text-black text-[0.8rem]  mr-2 py-1'/>
     <button type="submit"
        className='bg-transparent border-2  text-[0.8rem] font-semibold  outline-none px-4  py-1 shadow-2xl active:scale-90 duration-500 hover:bg-[#ff5e5e]'
     >
        AddTask
    </button>
   </form>
  )
}

export default TodoForm
