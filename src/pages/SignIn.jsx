import { useRef } from "react"
import { Link as Anchor } from "react-router-dom"

export default function SignIn() {

    const mail = useRef()
    const password = useRef()

    function handleSignIn() {
          let data = {
            mail: mail.current.value,
            password: password.current.value
          }
          console.log(data);
      }

    return (
        <div className="w-full min-h-[78vh] bg-[url(/img/backgroundSign.jpg)] bg-cover grow">
            <div className="min-h-[78vh] relative flex flex-col justify-center overflow-hidden">
                <div className="w-full p-6 m-auto bg-black bg-opacity-50 rounded-md shadow-xl lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-white uppercase underline">Sign in</h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label htmlFor="mail" className="block text-sm font-semibold text-white cursor-pointer">Email:</label>
                            <input ref={mail} type="text" name="mail" id="mail" className="block w-full px-4 py-2 mt-2 text-[#4f46e5] font-bold bg-white border rounded-md focus:border-[#4f46e5] focus:ring-[#4f46e5] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="block text-sm font-semibold text-white cursor-pointer">Password:</label>
                            <input ref={password} type="password" name="password" id="password" className="block w-full px-4 py-2 mt-2 text-[#4f46e5] bg-white border rounded-md focus:border-[#4f46e5] focus:ring-[#4f46e5] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-6">
                            <input type="button" value="Login" onClick={handleSignIn} className="w-full px-4 py-2 tracking-wide text-white text-[18px] transition-colors duration-200 transform bg-[#4f46e5] rounded-md hover:bg-[#3f37d3] focus:outline-none focus:bg-[#3f37d3]"/>
                        </div>
                    </form>
                    <p className="mt-8 text-sm font-light text-center text-white">{" "}Don't have an account?{" "}
                        <Anchor to='/auth/signup' className="font-bold text-white px-1 hover:underline">Sign up</Anchor>
                    </p>
                </div>
            </div>
        </div>
    )
}