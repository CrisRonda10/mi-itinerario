import { useRef } from "react"
import { Link as Anchor, useNavigate } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux" 
import user_actions from "../store/actions/users"
import Swal from "sweetalert2"
const {signin} = user_actions

export default function SignIn() {
    const navigate = useNavigate()
    const mail = useRef("")
    const password = useRef("")
    const dispatch = useDispatch()

    async function handleSignIn() {
        let data = {
            mail: mail.current.value,
            password: password.current.value
        };
        let responseDispatch = dispatch(signin({ data }))
        .then(res=>{
            console.log(res)
            if (res.payload.token){
                Swal.fire({
                    icon: 'success',
                    title: 'Logged in!',
                  })
                  navigate('/')
            }else if(res.payload.messages.length>0){
                let html= res.payload.messages.map(each=>`<p>${each}</p>`).join('')
                Swal.fire({
                    title: 'Something went wrong!',
                    icon: 'error',
                    html 
                  })
            }
        })
        .catch(err=>console.log(err))
    }
    let user = useSelector(store=>store.users.user)
      console.log(user);
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
                    <div className="relative flex items-center justify-center w-full mt-14 border border-t">
                    <div className="absolute px-5 bg-white font-bold rounded-full text-[#4f46e5]">Or</div>
                    </div>
                    <div className="flex mt-8 gap-x-2">
                    <button
                        type="button"
                        className="flex items-center justify-center w-full p-2 border border-white rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current text-white"
                        >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                    </div>
                    <p className="mt-8 text-sm font-light text-center text-white">{" "}Don't have an account?{" "}
                        <Anchor to='/auth/signup' className="font-bold text-white px-1 hover:underline">Sign up</Anchor>
                    </p>
                </div>
            </div>
        </div>
    )
}

