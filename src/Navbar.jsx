import React, { useState } from "react";

export default function Planner() {
  const [Image, setImage] = useState(null);

  const clickAndchange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      {/* Heading Section */}
      <div className="text-center mt-4">
        <h1 className="text-black font-medium text-xl sm:text-2xl">Plan your event...</h1>
        <h1 className="text-black font-medium text-xl sm:text-2xl">and</h1>
        <h1 className="text-black font-medium text-xl sm:text-2xl">share your event...</h1>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start">
  <div className="w-full sm:w-80 h-50 border 3 border-solid rounded-lg flex flex-col-reverse items-center justify-center m-6 ml-10">
    <input type="file" id="fileInput" className="hidden" accept="image/*" onChange={clickAndchange} />
    <label htmlFor="fileInput" className="cursor-pointer">
      {Image ? "change Image" : "click to upload"}
    </label>
    {Image && <img src={Image} alt="uploaded" className="w-full h-full object-cover" />}
  </div>

  <div className="flex flex-col w-full sm:w-auto">
    <input type="text" placeholder="Event name..." className="border 3 w-full sm:w-100 h-12 rounded-lg sm:ml-24 m-5 p-5 focus:border-blue-500 focus:ring-3 focus:ring-blue-300 outline-none" />
    <input type="text" placeholder="Event place..." className="border 3 w-full sm:w-100 h-12 rounded-lg sm:ml-24 m-5 p-5 focus:border-blue-500 focus:ring-3 focus:ring-blue-300 outline-none" />
    <input type="time" className="border 3 w-full sm:w-100 h-12 rounded-lg sm:ml-24 m-5 p-5 focus:border-blue-500 focus:ring-3 focus:ring-blue-300 outline-none" />
  </div>
</div>

      {/* Date, Seat Capacity & Event Info Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full px-4">
        <div className="w-full sm:w-72 flex flex-col">
          <input type="date" className="border w-full h-12 rounded-lg m-2 p-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none text-gray-600 text-sm sm:text-base" />
          <input type="number" min="1" max="250" placeholder="Seat capacity" className="border w-full h-12 p-4 m-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none rounded-lg text-sm sm:text-base" />
        </div>

        <textarea placeholder="Information regarding the event..." className="border w-full sm:w-96 h-32 m-2 p-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none rounded-lg text-sm sm:text-base"></textarea>
      </div>
    </>
  );
}
