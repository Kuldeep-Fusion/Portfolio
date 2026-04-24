"use client"
import Header from "@/app/components/admin/header"
import { useEffect, useState } from "react"


const Projects = () => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
    try {
        fetch("/api/projects")
        .then((res) => res.json())
        .then((data) => {
            setData(data.data);
            console.log('fetch', data.data);
        }) 
    } catch (error) {
        console.log("Error fetching data" ,error)
    }
 }, [])


 //delete projects
 const deleteProjects = async (id) => {
try {
    await fetch(`/api/projects/${id}`, {
        method: "DELETE"
    }); 
} catch (error) {
    console.log("Error Deleting Prjoect", error)
}
 }

  return (
    <div>
      <Header title={"Projects"}/>
       <div className="flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  {data.map((i) => (
    <div
      key={i._id || i.id}
      className="border rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition"
    >
      {/* Image */}
      {i.image && (
        <img
          src={i.image}
          alt={i.title}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
      )}

      {/* Title */}
      <h2 className="text-xl font-semibold">{i.title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-1">
        {i.description}
      </p>

      {/* Link */}
      {i.link && (
        <a
          href={i.link}
          target="_blank"
          className="text-blue-500 text-sm underline mt-2 block"
        >
          Visit Project
        </a>
      )}

      {/* Date */}
      <p className="text-xs text-gray-400 mt-2">
        {new Date(i.createdAt).toLocaleDateString()}
      </p>

      {/* Actions */}
      <div className="flex gap-3 mt-4">
        <button className="bg-yellow-400 text-white px-3 py-1 rounded-lg text-sm">
          Edit
        </button>

        <button onClick={() => deleteProjects(i._id)} className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm">
          Delete
        </button>
      </div>
    </div>
  ))}
</div>
       </div>

    </div>
  )
}

export default Projects
