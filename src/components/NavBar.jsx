import { useState } from "react";
import { Link as Anchor, } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
const { signout } = user_actions

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    let name = useSelector(store => store.users.user?.name)
    let dispatch = useDispatch()

    return (
        <header className="min-h-[13vh] flex justify-center items-center bg-black">
            <nav className="w-full">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div className="w-full h-full">
                        <div className="h-[] flex items-center justify-between md:block">
                            <Anchor to={'/'} className="flex items-center  w-[183px] h-[43px] font-sans font-bold text-[32px] text-white hover:text-[#4f46e5] leading-[42.56px]">My Tinerary</Anchor>
                            <span className="flex flex-col items-start text-center md:ml-7 md:flex-row sm:items-start md:items-center">
                                <p className="text-[20px] text-white">{name}</p>
                                {name && <span onClick={() => dispatch(signout())} className=" text-white text-[12px] text-center items-center cursor-pointer h-[20px] w-[60px] ml-1 rounded bg-[#4f46e5]">Sign Out</span>}
                            </span>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-white hover:text-[#4f46e5]">
                                    <Anchor to='/' className="w-[69px] h-[32px] text-[24px] font-bold leading-[31.92px]">Home</Anchor>
                                </li>
                                <li className="text-white hover:text-[#4f46e5]">
                                    <Anchor to='/cities' className="w-[62px] h-[32] text-[24px] font-bold leading-[31.92px]">Cities</Anchor>
                                </li>
                                <li className="text-gray-600">
                                    {name ? (<Anchor to='/auth/signin' className=" hidden items-center w-[150px] h-[54px] bg-[#4f46e5] text-white text-[20px] font-bold py-[16px] px-[32px] leading-[31.92px] transition-colors duration-200 transform rounded-md hover:bg-[#3f37d3] focus:outline-none focus:bg-[#3f37d3]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 inline py-[2px] px-[1px]"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>Login</Anchor>) : (<Anchor to='/auth/signin' className=" flex items-center w-[150px] h-[54px] bg-[#4f46e5] text-white text-[20px] font-bold py-[16px] px-[32px] leading-[31.92px] transition-colors duration-200 transform rounded-md hover:bg-[#3f37d3] focus:outline-none focus:bg-[#3f37d3]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 inline py-[2px] px-[1px]"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>Login</Anchor>)}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

