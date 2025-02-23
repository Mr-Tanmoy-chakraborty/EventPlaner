import React,{useState} from "react";

export default function Planner() {
  const [Image,setImage]=useState(null);
  const clickAndchange=(event)=>{
   const file=event.target.files[0];
   if(file){
    setImage(URL.createObjectURL(file));
   }
  }
  return (
    <>
    <div>
      <div className="text-center">
       <h1 className="text-black font-medium text-xl sm:text-2xl">plan your event.....</h1>
       <h1 className="text-black font-medium text-xl sm:text-2xl">and</h1>
       <h1 className="text-black font-medium text-xl sm:text-2xl">share your event......</h1>
    </div>
  
    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-40">
  <div className="w-full sm:w-100 h-50 border 3 border-solid rounded-lg flex flex-col-reverse items-center justify-center m-6 ml-10">
    <input type="file" id="fileInput" className="hidden" accept="image/*" onChange={clickAndchange} />
    <label htmlFor="fileInput" className="cursor-pointer">
      {Image ? "change Image" : "click to upload"}
    </label>
    {Image && <img src={Image} alt="uploaded" className="w-full h-full object-cover" />}
  </div>

   <div className="flex flex-col w-full sm:w-auto ">
    <input type="text" placeholder="Event name..." className="border 3 w-full sm:w-100 h-12 rounded-lg sm:ml-24 m-5 p-5 focus:border-blue-500 focus:ring-3 focus:ring-blue-300 outline-none" />
    <input type="text" placeholder="Event place..." className="border 3 w-full sm:w-100 h-12 rounded-lg sm:ml-24 m-5 p-5 focus:border-blue-500 focus:ring-3 focus:ring-blue-300 outline-none" />
    <input type="time" className="border 3 w-full sm:w-100 h-12 rounded-lg sm:ml-24 m-5 p-5 focus:border-blue-500 focus:ring-3 focus:ring-blue-300 outline-none" />
   </div>
  </div>

    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-40  ">
      <div className="flex flex-col w-full sm:w-auto">
       <input type="date"className="border w-full sm:w-100 h-12 rounded-lg m-5 sm:ml-12 p-5 focus:border-blue-500 focus:ring-3 focus:ring-blue-300 outline-none text-black-400" />   
       <input type="number"min="1"max="250"placeholder="seat capabilty"className="border w-full sm:w-100  sm:ml-12 h-12 p-5 m-5 focus:border-blue-500 focus:ring-3 focus:ring-blue-300 outline-none rounded-lg" />
       </div>
        <div className="flex w-full sm:w-auto">
       <textarea type="text"placeholder="Information regarding the event......"className="border  w-full sm:w-100 sm:ml-12 h-35 p-5 m-5    focus:border-blue-500 focus:ring-3 focus:ring-blue-300 outline-none rounded-lg"/>
    </div>
    </div>
    </div>
    </>
  )
}

