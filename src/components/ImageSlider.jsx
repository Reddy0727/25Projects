import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {AnimatePresence,motion} from 'framer-motion'

const ImageSlider = () => {
    const [images,setImages] = useState([])
    const [index,setIndex] = useState(2)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const fetchImages = async () => {
        try {
            setLoading(true)
            const res = await fetch(`https://picsum.photos/v2/list?page=2&limit=10`)
            const data = await res.json()
            setImages(data)
            setError('')
        }
        catch(err) {
          setError(err.message)
        }
        finally {
            setLoading(false)
        }
    }
    console.log(images)
    useState(()=>{
      fetchImages()
    },images)
    if(loading) {
        return (
            <p>Loading...</p>
        )
    }
    if(error) {
        return (
            <p>{error}</p>
        )
    }
  return (
   <section className='h-screen'>
     <div className='flex justify-center p-4'>
      {images.length>0 && (<div className='img-grid'>
         <AnimatePresence >
             <motion.img src={images[index].download_url} alt="img"   key={images[index].id}
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 exit={{ scale: 0 }}
                 transition={{ duration: 0.5 }} 
             />
           </AnimatePresence>  
             <div className='flex justify-between px-4 self-center'>
                   <KeyboardArrowLeftIcon onClick={()=>setIndex(prev=> prev!==0 ? prev-1 : images.length-1)} className='cursor-pointer' />
                   <KeyboardArrowRightIcon onClick={()=>setIndex(prev=> prev!==images.length-1 ? prev+1 : 0)} className='cursor-pointer'/>
             </div>
         
         <div className='flex gap-1 self-end justify-self-center py-6'>
         {images.map((_,i)=>(
                <span key={i} 
                    className='h-[16px] w-[16px] rounded-full bg-white cursor-pointer '
                    onClick={()=>setIndex(i)}
                > </span>
         ))}
       </div>
      </div>)
      }
       
    </div>
   </section>
  )
}

export default ImageSlider
