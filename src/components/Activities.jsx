import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react"
import activity_actions from "../store/actions/activities"

const {read_activities_from_itinerary} = activity_actions


export default function Activities({itinerary_id}) {

    const dispatch = useDispatch()

    useEffect(
        ()=>{dispatch(read_activities_from_itinerary({itinerary_id:itinerary_id}))},
        []
        )  
        const activities_from_itinerary = useSelector(store=> store.activities.activities_from_itinerary)
        console.log(activities_from_itinerary);  


  return (
    <div className="flex flex-col items-center">{activities_from_itinerary?.map(each=><div className="wrap m-7 w-[230px] h-[174px] border border-black " key={each._id}><img src={each.photo} alt={each._id} className="w-[230px] h-[150px]" /><p className="text-center">{each.name}</p></div>)}</div>
  )
}
