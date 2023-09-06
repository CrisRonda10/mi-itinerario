export default function Tickets({price}) {
  const ticketCount = (price) =>{
    if (price > 0 && price <= 70){
        return 1;
    }else if (price >= 71 && price <=140){
        return 3;
    }else{
        return 5;
    }
  }
  const ticketPrice = ticketCount(price)
  
    return (
    <>
        {[...Array(ticketPrice)].map((_,index) => (<span className="flex flex-row items-center" key={index} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
      </svg></span>))}
      </>
  )
}
