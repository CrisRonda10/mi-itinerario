import { useEffect, useState, useRef } from "react"
import Gallery from "../components/Gallery"
import axios from "axios"
import apiUrl from "../apiUrl"


export default function Cities() {
  const [cities,setCities] = useState([])
  const [reEffect, setReEffect] = useState(true)
  const [noResults, setNoResults] = useState(false)
  const text = useRef()

  useEffect(() => {
    axios(apiUrl+'cities?city='+text.current.value.trim())
      .then(res => {
        //console.log(res.data) // Agrego un console.log para verificar la respuesta del servidor
        if (res.data.response.length === 0) {
          setNoResults(true)
        } else {
          setNoResults(false)
          setCities(res.data.response)
        }
      })
      .catch(err => {
        //console.log(err.response.data.message) // Agrego un console.log para mostrar un mensaje de error en caso de que haya un problema con el servidor
        setNoResults(true)
      })
  }, [reEffect])

  function handleFilter() {
    setReEffect(!reEffect)
  }

  //console.log(noResults) // Agrego un console.log para verificar si el estado de noResults está cambiando correctamente
 
  return (
    <div className="min-h-[78vh] flex flex-col justify-center items-center pb-8 bg-[url(/img/foto-1.jpg)] bg-cover grow">
       <div className="flex flex-col text-white items-center mt-[150px] lg:mt-[270px] mx-1 gap-3">
        <h1 className="text-4xl bg-black font-bold mb-2 p-1 rounded-md">Cities</h1>
         <p className="text-lg bg-black italic flex items-center text-justify p-1 rounded-md">Collection of the most beautiful places and experiences</p>
        </div>
      <form className="max-w-sm px-4 mb-7 mt-9">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-[#4f46e5] left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={text}
            type="text"
            name="text"
            id="text"
            onKeyUp={handleFilter}
            placeholder="Search your city"
            className="w-full py-3 pl-12 pr-4 text-black border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-[#4f46e5]"
          />
        </div>
      </form>
      {noResults ? <p className="mt-4 p-3 font-semibold italic text-white md:text-[30px] border-4 bg-black">City not found. Please find another city</p> : <Gallery cities={cities}/>}
    </div>)
}
