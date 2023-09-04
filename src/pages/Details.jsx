import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import city_actions from "../store/actions/cities"
import itinerary_actions from "../store/actions/itineraries"
import ItineraryComponent from "../components/ItineraryComponent"


const {read_city} = city_actions
const {read_itineraries_from_city} = itinerary_actions


export default function Details() {

  const {id} = useParams()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  
  useEffect(
    ()=>{dispatch(read_city({id:id}))},
    []
  )
  const city = useSelector(store=>store.cities.city)
  console.log(city);
  
    useEffect(
      ()=>{dispatch(read_itineraries_from_city({city_id:id}))},
      []
    )

    const itineraries = useSelector(store=>store.itineraries.itineraries_from_city)
    console.log(itineraries);

  return (
    <div className="w-full min-h-[78vh] flex items-center justify-center ">
      <div className="w-full min-h-[78vh] bg-cover bg-center relative flex flex-col items-center justify-center" style= {{ backgroundImage: `url(${city.photo})`}}>
        <div className="flex flex-col items-center space-y-1 gap-7">
          
          <h1 className=" text-white bg-black text-[22px] mt-9 p-1 sm:text-4xl font-bold">{city.city}</h1>
          <p className="text-white bg-black text-[20px] text-justify m-4 p-1">{city.smalldescription}</p>
          <div className="flex flex-col items-center space-y-2">
          <span
            className="inline-flex items-center px-4 py-2 text-white bg-[#4f46e5] border border-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
            <span onClick={()=>setShow(!show)} className="text-sm font-medium h-7 flex justify-center items-center">
              {show ? ("Hide") : ("View itineraries")}
            </span>
          </span>
          <div>
          {show && (itineraries.length > 0 ? (
            itineraries.map(each=><ItineraryComponent key={each._id} name={each.name} photo={each.photo} user={each.city_id.admin_id.name} tags={each.tags} duration={each.duration} price={each.price}/>)
          ) : (
            <p className="mt-4 p-3 font-semibold italic text-white md:text-[30px] border-4 bg-black">This city has no itineraries at the moment</p>
          ))}
          </div>
          </div>
        </div>
      </div>
    </div>

  )
}
