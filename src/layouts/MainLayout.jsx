import NavBar from "../components/NavBar"
import Footer from "../components/Footer"



export default function MainLayout({children}) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#ebebeb]">
      <NavBar/>
      {children}
      <Footer/>
    </div>
  )
}
