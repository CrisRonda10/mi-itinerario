import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Cities from "./pages/Cities";
import MainLayout from './layouts/MainLayout'
import Details from "./pages/Details";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


const router = createBrowserRouter([
    { 
        path:'/', 
        element: <MainLayout/>,
        children: [
            {path:'/', element:<Home/>},
            {path:'/cities', element: <Cities/>},
            {path:'/city/:id', element:<Details/>},
            {path:'/auth/signin', element:<SignIn/>},
            {path:'/auth/signup', element:<SignUp/>}
        ] 
    }
])

export default router