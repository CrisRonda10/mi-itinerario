import { useState } from "react"
import Arrow from "../components/Arrow"
import Card from "../components/Card"

export default function Carousel({ data }) {
  let [counter, setCounter] = useState(0)
  let [counterTo, setCounterTo] = useState(4)
  function next_slide(){
    if (data.length <= counterTo){
      setCounter(0)
      setCounterTo(4)
    }else{
      setCounter(counter+4)
      setCounterTo(counterTo+4)
    }
  }
  function prev_slide(){
    if (counter <= 0){
      setCounter(data.length-4)
      setCounterTo(data.length)
    }else{
      setCounter(counter-4)
      setCounterTo(counterTo-4)
    }
  }
  return (
    
    <div className="flex items-center w-[320px] md:w-[600px] lg:w-[60vw] xl:w-2/5">
        <Arrow direction="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" onClick={prev_slide}/>
        <div className="mt-[30px] mb-[30px] lg:mt-0 lg:mb-0 w-[300px] md:w-full bg-[#4f46e5] rounded-2xl">
          <div className="flex justify-center text-white"><p className="pt-5 underline decoration-2 text-[17px] md:text-xl font-bold">Popular MYTINERARIES!</p></div>
          <div className="flex flex-wrap justify-center md:m-5">
            {data.slice(counter, counterTo ).map(each => <Card key={each.id} src={each.photo} alt={each.id} text={each.city} />)}
          </div>
          <div className="flex justify-center items-center text-white"><p className="pb-3 px-1  italic text-center text-[14px] lg:text-[16px]">"Find your perfect trip, designed by insiders who know and love their cities!"</p></div>
        </div>
        <Arrow direction="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" onClick={next_slide} />
        </div>
        
  )
}
