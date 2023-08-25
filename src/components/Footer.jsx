import { Link as Anchor } from "react-router-dom"
export default function Footer() {
  return (
   <footer className="min-h-[9vh] flex items-center justify-center bg-black">
    <div className="flex flex-col justify-center items-center">
    <Anchor to={'/'} className="flex text-[16px] font-bold text-white hover:text-[#4f46e5]">My Tinerary</Anchor>
    <p className="flex text-[10px] text-white">&#169; All rights reserved</p>
    </div>
   </footer>
  )
}
