import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";




const AppLayout= ()=>{
    return (
    <div className="app">
       <Header/>
       <Outlet />
    </div>
    )
};

const appRouter = createBrowserRouter([
{path:"/" , element:<AppLayout /> , errorElement:<Error /> , children:[
    { index: true, element: <Body /> },
    {path:"/about" , element:<About />},
{path:"/contact" , element:<Contact />},
{path:"/restaurant/:restaurantId" , element:<RestaurantMenu />},
]},  


]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);