import { Link as Anchor } from "react-router-dom"
import { useRef } from "react"
import axios from "axios"
import apiUrl from '../apiUrl'

export default function SignUp() {
  const name = useRef()
  const lastName = useRef()
  const country = useRef()
  const photo = useRef()
  const mail = useRef()
  const password = useRef()

  async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value
      }
      await axios.post(apiUrl + 'users/signup', data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full min-h-[78vh] bg-[url(/img/backgroundSign.jpg)] bg-cover grow">
      <div className="min-h-[78vh] relative flex flex-col justify-center overflow-hidden">
        <div className="w-full p-6 m-auto bg-black bg-opacity-50 rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-white uppercase underline">Register form</h1>
          <form className="mt-6">
            <div className="mb-2">
              <label htmlFor="name" className="block text-sm font-semibold text-white cursor-pointer">Name:</label>
              <input ref={name} type="text" name="name" id="name" className="block w-full px-4 py-2 mt-2 text-[#4f46e5] font-bold bg-white border rounded-md focus:border-[#4f46e5] focus:ring-[#4f46e5] focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="mb-2">
              <label htmlFor="lastName" className="block text-sm font-semibold text-white cursor-pointer">Last Name:</label>
              <input ref={lastName} type="text" name="lastName" id="lastName" className="block w-full px-4 py-2 mt-2 text-[#4f46e5] font-bold bg-white border rounded-md focus:border-[#4f46e5] focus:ring-[#4f46e5] focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="mb-2">
              <label htmlFor="country" className="block text-sm font-semibold text-white cursor-pointer">Country:</label>
              <input ref={country} type="text" name="country" id="country" className="block w-full px-4 py-2 mt-2 text-[#4f46e5] font-bold bg-white border rounded-md focus:border-[#4f46e5] focus:ring-[#4f46e5] focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="mb-2">
              <label htmlFor="photo" className="block text-sm font-semibold text-white cursor-pointer">Photo:</label>
              <input ref={photo} type="text" name="photo" id="photo" className="block w-full px-4 py-2 mt-2 text-[#4f46e5] font-bold bg-white border rounded-md focus:border-[#4f46e5] focus:ring-[#4f46e5] focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="mb-2">
              <label htmlFor="mail" className="block text-sm font-semibold text-white cursor-pointer">Email:</label>
              <input ref={mail} type="text" name="mail" id="mail" className="block w-full px-4 py-2 mt-2 text-[#4f46e5] font-bold bg-white border rounded-md focus:border-[#4f46e5] focus:ring-[#4f46e5] focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-white cursor-pointer">Password:</label>
              <input ref={password} type="password" name="password" id="password" className="block w-full px-4 py-2 mt-2 text-[#4f46e5] bg-white border rounded-md focus:border-[#4f46e5] focus:ring-[#4f46e5] focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="mt-6">
              <input type="button" value="Register" onClick={handleSignUp} className="w-full px-4 py-2 tracking-wide text-white text-[18px] transition-colors duration-200 transform bg-[#4f46e5] rounded-md hover:bg-[#3f37d3] focus:outline-none focus:bg-[#3f37d3]" />
            </div>
          </form>
          <p className="mt-8 text-sm font-light text-center text-white">{" "}Already have an account?{" "}
            <Anchor to='/auth/signin' className="font-bold text-white px-1 hover:underline">Log in</Anchor>
          </p>
        </div>
      </div>
    </div>
  )
}



