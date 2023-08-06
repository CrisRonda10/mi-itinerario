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
    <>
<Arrow direction="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" onClick={prev_slide}/>
        <div className="w-2/5">
          <div className="flex justify-center"><p>Popular MYTINERARIES!</p></div>
          <div className="flex flex-wrap justify-center m-5">
            {data.slice(counter, counterTo ).map(each => <Card key={each.id} src={each.photo} alt={each.id} text={each.city} />)}
          </div>
        </div>
        <Arrow direction="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" onClick={next_slide} />
        </>
  )
}
