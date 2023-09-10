import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Home/Home";

const route = createBrowserRouter([

    {
        path:"/",
        element:<Main></Main>,
        errorElement:<h1>404 Not found</h1>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }

])


export default route;