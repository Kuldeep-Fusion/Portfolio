

const Header = ({title}) => {
  return (
    <div className="bg-yellow-100 p-6 rounded-2xl mb-4">
      <div className="flex justify-between items-center">
        <h1 className='text-4xl font-bold'>{title}</h1>
      <div className='profile flex items-center justify-between gap-4'>
          <span className='w-20 h-20 rounded-full bg-blue-400'></span>  
         <div className="avtar-details">
          <h3 className="font-semibold text-2xl">Kuldeep Kumar</h3>
          <h4 className="text-gray-400">raw336665@gmail.com</h4>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Header
