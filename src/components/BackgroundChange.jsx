import React from 'react'
import { useState } from 'react'

const BackgroundChange = () => {
    const [background,setBackground] = useState('#678aff')
    const handleChange=()=>{
        let hexValue='#'
        const hexValues='0123456789abcedf'
        for(let i=0;i<6;i++) {
            hexValue += hexValues.charAt(Math.floor(Math.random() * hexValues.length))
        }
        setBackground(hexValue)
    }
  return (
     <section className={`h-[100vh] grid place-items-center transition-all duration-500  `}
         style={{
             backgroundColor: background,
        }}
    >
      <div className='flex font-mono'>
        <button 
            className='bg-white text-black text-[0.8rem] font-semibold rounded-md outline-none px-12  py-2 shadow-2xl active:scale-90 duration-300'
            onClick={handleChange}
        >Change</button>
      </div>
    </section>
  )
}

export default BackgroundChange
