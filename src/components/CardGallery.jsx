import { Link as Anchor } from "react-router-dom"

export default function CardGallery({src, alt, city, country, id}) {
  return (
      
      <div className="w-[400px] h-[300px] flex flex-col items-center  m-5 p-2 bg-white shadow-lg shadow-black drop-shadow-lg backdrop-saturate-900 rounded-[16px] transform hover:-translate-y-1 transition duration-300">
      <p className=" flex items-center font-pop font-bold italic leading-[31.92px]  text-[20px] bg-white bg-opacity-80 p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 mb-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
{city} - {country}</p>
      <img src={src} alt={alt} className="w-[300px] h-[200px] rounded-[10px] border-4 border-white mb-1" />
      <Anchor to={'/city/'+id} className="w-[100px] h-[35px] bg-[#4f46e5] text-white py-[10px] px-[20px] rounded-[8px] text-[12px]">View More</Anchor>
      </div>
  )
} 

