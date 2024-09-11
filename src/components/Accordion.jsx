import React, { useState } from 'react'
import { accordionData } from '../utilities/constant'

const Accordion = () => {
    const [selected,setSelected] = useState(null)
    const handleSelected = (index) => {
        setSelected(prev=> prev === index ? null : index)
    }
  return (
   <div className='h-[100vh] grid place-items-center font-mono'>
     <div className='sm:px-24 w-full'>
       {accordionData  && accordionData.map((item,idx)=>(
        <div key={idx} className=' px-4 py-1'>
            <div 
                className='flex justify-between bg-slate-500 p-4 sm:px-10 cursor-pointer'
                onClick={()=>handleSelected(idx)}
            >
                <h2>{item.title}</h2>
                <span>{selected !== idx ? '+' : '-'}</span>
            </div>
            {selected === idx &&  <p className='p-4 sm:px-10  bg-slate-400 mt-1 text-[0.8rem] sm:text-[1rem]'>{item.description}</p>}
        </div>
      ))}
    </div>
   </div>
  )
}

export default Accordion
