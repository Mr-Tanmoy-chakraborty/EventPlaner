import React from 'react'
import image from './events.jpg'
export default function Home() {
  return (
    <>
     <div className="flex flex-row justify-center items-center sm:flex sm:flex-row w-full h-full">
         <div className=" leading-normal w-100 h-60 ml-5 flex-wrap sm:font-bold font-medium sm:mt-20 sm:mr-42 sm:ml-12 mt-1 mb-10 ">It is a Event planner app.  So you can simply add your events in your app.  like if you have a quiz competition and you want to host the show then you can definitely add your plans in your app and then you can sell the tickets also. Not only used for the quiz competitions you can also add many other events which you are going to host.......... </div>
         <div className="w-75 h-65 mt-10 mb-15 ml-20 items-end sm:w-100 sm:h-80 sm:mt-20 sm:ml-35 sm:mb-30 rounded-lg sm:flex-wrap sm:items-center "style={{backgroundImage:`url(${image})`, backgroundSize: 'cover',backgroundPosition: 'center'}}></div>
     </div>
    </>
      // 535,632
  )
}
