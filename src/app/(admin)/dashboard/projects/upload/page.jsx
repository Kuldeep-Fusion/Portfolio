import Header from '@/app/components/admin/header'
import React from 'react'

const Upload = () => {
  return (
    <div>
      <Header title={"Upload Projects"}/>
     <div className=' bg-green-200 w-xl p-10 rounded-md shadow-2xl'> 
      <h2 className='text-2xl mb-3 '>Upload</h2>
        <form className='flex flex-col  gap-3 '>
        <input type="text" placeholder='Enter Title' className='border-2 rounded-md border-blue-400 p-2'/>
         <input type="text" placeholder='Enter Discription' className='border-2 rounded-md border-blue-400 p-2' />
          <input type="text" placeholder='Enter Image' className='border-2 rounded-md border-blue-400 p-2'/>
           <input type="text" placeholder='Enter Link' className='border-2 rounded-md border-blue-400 p-2'/>
           <button className='p-2 px-4 bg-red-300'>Add</button>
      </form>
     </div>
    </div>
  )
}

export default Upload
