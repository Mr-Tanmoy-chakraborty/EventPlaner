import React ,{useState}from 'react'
import {Link}from 'react-router-dom'
export default function Nav() {
    const[IsOpen,setIsOpen]=useState(false);
    const toggleMenu=()=>{
       if(IsOpen==true){
        setIsOpen(false);
       }
       else{
        setIsOpen(true);
       }
    }
  return (
    <>
    <nav className="bg-green-500 p-4 text-white"> 
        <div className="flex items-center justify-between">
            <Link to="" className="md:hidden text-2xl "onClick={toggleMenu}>{IsOpen ? "✖" : "☰"}</Link>
             <h1 className="px-4 text-white-500 text-2xl font-bold">MyPlanner</h1>

        <div className="hidden md:flex gap-4">
            <Link to="/"className="px-4 py-2 bg-green-500 text-xl rounded hover:bg-white hover:text-blue-500 transition-all duration-400 font-bold">🏠Home</Link>
            <Link to="/Planner" className="px-4 py-2 bg-green-500 text-xl rounded hover:bg-white hover:text-blue-500 transition-all duration-400 font-bold">🔔Planner</Link>
            <Link to="/MyEvents" className="px-4 py-2 bg-green-500 text-xl rounded hover:bg-white hover:text-blue-500 transition-all duration-400 font-bold">MyEvents📖</Link>
            <Link to="/About" className="px-4 py-2 bg-green-500 text-xl rounded hover:bg-white hover:text-blue-500 transition-all duration-400 font-bold">ℹ️ About</Link>
            
        </div>
        </div>
        {IsOpen &&(
            <div className="flex flex-col mt-4 space-y-2 md:hidden">
            <Link to="/" className="px-4 py-2 bg-white text-xl text-black rounded hover:bg-white hover:text-blue-500 transition-all duration-400 font-bold">🏠Home</Link>
            <Link to="/Planner" className="px-4 py-2 bg-white text-xl text-black rounded hover:bg-white hover:text-blue-500 transition-all duration-400 font-bold">Planner🔔</Link>
            <Link to="/MyEvents" className="px-4 py-2 bg-white text-xl text-black rounded hover:bg-white hover:text-blue-500 transition-all duration-400 font-bold">📖MyEvents</Link>
            <Link to="/About" className="px-4 py-2 bg-white text-xl text-black rounded hover:bg-white hover:text-blue-500 transition-all duration-400 font-bold">About ℹ</Link>
            
        </div>
        )}
        
    </nav>
    </>
  )
}
