
import Header from "@/app/components/admin/header";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";


const Dashboard = () => {
  return (
    <div >
      <div className=" ">
      <Header title="Dashboard" />
      <div className="flex justify-between items-center gap-10 ">
        <div className="flex items-center text-white gap-10 relative bg-green-600 px-10 py-7 rounded-2xl shadow-xl border-2 border-green-400 w-full ">
          <span className="text-[80px] font-bold">32</span>
          <div className="content">
            <h1 className="text-3xl">Total Contacts</h1>
          <Link href={"dashboard/contact"}><button className="text-5xl text-white absolute top-5 right-5 -rotate-40 "><FaCircleArrowRight />
</button></Link>
          </div>
        </div>
 <div className="flex items-center text-white gap-10 relative bg-green-600 px-10 py-7 rounded-2xl shadow-xl border-2 border-green-400 w-full ">
          <span className="text-[80px] font-bold">12</span>
          <div className="content">
            <h1 className="text-3xl">Total Projects</h1>
          <Link href={"dashboard/projects"}><button className="text-5xl text-white absolute top-5 right-5 -rotate-40 "><FaCircleArrowRight />
</button></Link>
          </div>
        </div>

        
      </div>
      </div>
    </div>
  )
}

export default Dashboard
