import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
    const [todos,setTodos] = useState([])
    const createTodo = newTodo => setTodos(todo=>[...todo,newTodo])
    const removeTodo = (idx) => {
        setTodos(list=>list.filter((_,idex)=>idex !== idx))
    }
    const updateTodo = (updateTodo,previousTodo) => {
        const index = todos.findIndex((item) => item === previousTodo);

        if (index !== -1) {
          setTodos((currentTodos) => 
            currentTodos.map((todo, i) => (i === index ? updateTodo : todo))
          );
        }
    }
  return (
    <section className='min-h-[100vh] h-auto  grid place-items-center  p-4  '>
       <div className='w-1/3 bg-[#ff6666] p-6 flex flex-col gap-4 '>
             <TodoForm createTodo={createTodo}  />
            <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}/>
       </div>
    </section>
  )
}

export default Todo
