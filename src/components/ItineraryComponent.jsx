import { useState } from "react";
import Tickets from "./Tickets";
import Activities from "./Activities";

export default function ItineraryComponent({ name, photo, user, tags, duration, price, id }) {
  const [view, setView] = useState(true);
  const time = Math.floor(duration/60)


  return (
    <div className="flex flex-row justify-center flex-wrap mx-auto">
      <div className="transition-all duration-150 flex w-full px-4 py-6 lg:w-[545px] md:w-[393px]">
        <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
          <h1 className="flex items-center justify-center text-2xl font-bold my-2">{name}</h1>
          <div className="md:flex-shrink-0">
            <img src={photo} alt="itinerary photo" className="object-fill w-full rounded-lg rounded-b-none md:h-56 sm:h-auto lg:w-[545px] md:w-[393px]" />
          </div>
          <div className="flex items-center justify-between px-4 py-2 overflow-hidden mt-3 mb-1">
            <span className="text-xs font-bold">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </span>
            </span>
            <div className="text-xs font-medium flex flex-row items-center justify-between">
              <span onClick={() => setView(!view)}>
                {view ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                )}
              </span>
            </div>
          </div>
          
          {view ? ("") : (<><hr className="border-gray-300" /><div className="flex items-center flex-1 px-4 py-1 text-center text-xs sm:text-base lg:text-lg lg:w-[545px] md:w-[393px] xl:w-[545px] ">
            <span className="flex flex-wrap justify-center items-center">
              <p>{user}</p>
              <img className="object-cover h-10 rounded-full" src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg" alt="Avatar" />
            </span>
            <div>Hashtags: {tags}</div>
            <div>Duration: {time}hs</div>
            <div className="flex flex-col items-center justify-center">
              Price:
              <span className="flex flex-row items-center">
                <Tickets price={price} />
              </span>
            </div>
            </div><hr className="border-gray-300" />
         
            {<Activities itinerary_id={id}/>}
          
          <hr className="border-gray-300" /></>)}
        </div>
      </div>
    </div>
  );
}