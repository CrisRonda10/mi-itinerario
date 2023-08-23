import { Link as Anchor } from "react-router-dom"
export default function Footer() {
  return (
   <footer className="min-h-[9vh] flex items-center bg-black">
    <div className="flex flex-col justify-center items-center ml-[20px]">
    <Anchor to={'/'} className="flex text-[16px] font-bold text-white">My Tinerary</Anchor>
    <p className="flex text-[10px] text-white">&#169; All rights reserved</p>
    </div>
   </footer>
  )
}
