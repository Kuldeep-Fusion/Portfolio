"use client";
import Header from "@/app/components/admin/header";
import { useEffect, useState } from "react"
import { FaEdit, FaTrash } from "react-icons/fa";

const Contact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/contact");
        const result = await res.json();

        setData(Array.isArray(result) ? result : result.data || []);
        
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;


  // delete contact
 const deleteContact = async (id) => {
  try {
    await fetch(`/api/contact/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("Error Deleting", error);
  }
};


  return (
    <div className="max-w-6xl mx-auto p-6">

     <Header title={"Contact"} />

      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="w-full text-left border-collapse">
          
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr >
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Message</th>
              <th className="p-4">Date</th>
         
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item._id}
                className={`border-t hover:bg-gray-50 transition ${
                  !item.read ? "bg-blue-50" : ""
                }`}
              >
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4 text-gray-600">{item.email}</td>
                <td className="p-4 text-gray-600 truncate max-w-xs">
                  {item.message}
                </td>
                <td className="p-4 text-sm text-gray-400">{item.createdAt}</td>

                {/* Status */}
                

                {/* Actions */}
                <td className="p-4 flex justify-center gap-2">
                  <button
                    onClick={() => {
                      onEdit(item);
                      onMarkRead(item.id);
                      
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
                  >
                    <FaEdit size={14} />
                  </button>

                  <button
                    onClick={() => deleteContact(item._id)}
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                  >
                    <FaTrash size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Contact;