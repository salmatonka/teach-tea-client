import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main";
import Cart from "../Pages/Cart/Cart";
import ServiceAdd from "../Pages/Dashboards/ServiceAdd";
import ServiceList from "../Pages/Dashboards/ServiceList";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import About from "../Shares/About/About";


const routes = createBrowserRouter([
    {
        path:"/",
        element: <Main />,
        children:[
            {
                path:"/",
                element: <Home />,  
            },
            {
                path:"/cart",
                element: <Cart />,  
            },
            {
                path:"/about",
                element: <About/>,  
            },
           
            {
              path:"/serviceDetails/:id",
              element: <ServiceDetails />, 
              loader: ({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
            } 
            
    
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <ServiceList />,
          },
          {
            path: "/dashboard/serviceAdd",
            element: <ServiceAdd />,
          },
        ],
      },
])

export default routes;