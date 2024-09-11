import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    const [isEditing,setIsEditing] = useState(null)
    const [task, setTask] = useState('');
    const handleChange = evt => {
        setTask(evt.target.value);
      };
      const handleUpdate = (prevItem) => {
        if(task.trim()){
            updateTodo(task,prevItem);
            setTask('')
            setIsEditing(null)
        }
      };

    return (
        <ul>
        {todos && todos.length > 0 && todos.map((item,i)=>(
         <div key={i} className='flex  items-center text-start  font-semibold justify-between text-[0.9rem]'>
           <li>
                 {isEditing === i ?  (
                    <div className="Todo">
                    <form className='flex' onSubmit={(e)=>{
                        e.preventDefault();
                        handleUpdate(item)
                    }}>
                      <input onChange={handleChange} value={task} type="text" className='bg-white flex-1 px-4 outline-none text-black text-[0.8rem]  mr-2 py-1' />
                      <button className='bg-transparent border-2  text-[0.8rem] font-semibold  outline-none px-4  py-1 shadow-2xl active:scale-90 duration-500'>Save</button>
                    </form>
                  </div>
      
                 ):<span className='text-start px-4'>{item}</span>}
           </li>
           {isEditing !== i &&  <div className='cursor-pointer'>
            <span
              onClick={()=>setIsEditing(i)}
            >
                  <EditIcon style={{height:20}} />
            </span>
            <span onClick={()=>removeTodo(i)}><DeleteIcon style={{height:20}}/></span>
            </div>}
          </div>
         ))}
      </ul> 
    )
  
}

export default TodoList
