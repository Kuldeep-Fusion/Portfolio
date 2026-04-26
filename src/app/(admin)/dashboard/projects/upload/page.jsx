'use client'
import Header from '@/app/components/admin/header'
import React, { useState } from 'react'

const Upload = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    link: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if(data.success){
        alert("project uploaded")

        setForm({
    title: "",
    description: "",
    image: "",
    link: ""
  });
      } else {
        alert("project failed to update");
        console.log(data)
      }

    } catch (error) {
      console.log("Error to Uploading project", error);
      
    }
  };

  return (
    <div>
      <Header title={"Upload Projects"} />
      
      <div className='bg-green-200 w-xl p-10 rounded-md shadow-2xl'> 
        <h2 className='text-2xl mb-3'>Upload</h2>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          
          <input 
            type="text" 
            name='title'
            value={form.title} 
            onChange={handleChange} 
            placeholder='Enter Title' 
            className='border-2 rounded-md border-blue-400 p-2'
          />

          <input 
            type="text"
            name='description'
            value={form.description}
            onChange={handleChange}
            placeholder='Enter Description' 
            className='border-2 rounded-md border-blue-400 p-2' 
          />

          <input
            type="text" 
            name='image'
            value={form.image}
            onChange={handleChange}
            placeholder='Enter Image URL' 
            className='border-2 rounded-md border-blue-400 p-2'
          />

          <input 
            type="text"
            name='link'
            value={form.link}
            onChange={handleChange}
            placeholder='Enter Link'
            className='border-2 rounded-md border-blue-400 p-2'
          />

          <button type="submit" className='p-2 px-4 bg-red-300'>
            Add
          </button>

        </form>
      </div>
    </div>
  )
}

export default Upload