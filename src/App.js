import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery=lazy(()=>{
    import("./components/Grocery");
})

const AppLayout= ()=>{

const [userName, setUserName] =useState();

useEffect (()=>{
    const data ={
        name:"Skandana KV",
    }
    setUserName(data.name);
},[]);


    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName}}>
           <div className="app">
           <Header/>
           <Outlet />
         </div>
        </UserContext.Provider>
        </Provider>
       
    )
};

const appRouter = createBrowserRouter([
{path:"/" , element:<AppLayout /> , errorElement:<Error /> , children:[
    { index: true, element: <Body /> },
    {path:"/about" , element:<About />},
{path:"/contact" , element:<Contact />},
{path:"/grocery" , element:<Suspense fallback={<h1>Loading...</h1>} ><Grocery /></Suspense>},
{path:"/restaurant/:restaurantId" , element:<RestaurantMenu />},
{path:"/cart" , element:<Cart />}
]},  


]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);