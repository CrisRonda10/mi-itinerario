
//import { useSelector, useDispatch } from "react-redux"
import { useEffect,useState } from "react"
//import activity_actions from "../store/actions/activities"
import axios from "axios"
import apiUrl from "../apiUrl"

//const { read_activities_from_itinerary } = activity_actions


export default function Activities({ itinerary_id }) {

  // const dispatch = useDispatch()

  // useEffect(
  //   () => { dispatch(read_activities_from_itinerary({ itinerary_id: itinerary_id })) },
  //   []
  // )
  // const activities_from_itinerary = useSelector(store => store.activities.activities_from_itinerary)
  // console.log(activities_from_itinerary);
const [activity, setActivity] = useState([])
useEffect(()=>{
  axios(apiUrl+'activities?itinerary_id='+itinerary_id)
  .then(res=>setActivity(res.data.response))
  .catch(err=> console.log(err))
},[]);

  return (
    <div className="flex flex-col items-center">{activity?.map(each => <div className="wrap m-7 w-[230px] h-[174px] border border-black " key={each._id}><img src={each.photo} alt={each._id} className="w-[230px] h-[150px]" /><p className="text-center">{each.name}</p></div>)}</div>
  )
}