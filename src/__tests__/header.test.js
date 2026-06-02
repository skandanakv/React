import Header from "../components/Header.js";
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"; 
import appstore from "../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

test("Header test", ()=>{

    <Provider store={appstore}>
    render(<Header/>)
    {/* const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument(); */}
    </Provider>

});


it(" should render login button", ()=>{
    render( <BrowserRouter>
        <Provider store={appstore}>
        <Header/> 
         </Provider>
         </BrowserRouter>)
   
    
    const button = screen.getByRole("button", { name: "Login" });
    expect(button).toBeInTheDocument();

})


it(" should render cart 0 ", ()=>{
    render( <BrowserRouter>
        <Provider store={appstore}>
        <Header/> 
         </Provider>
         </BrowserRouter>)
   
    
    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();

})


it(" should change login to logout  ", ()=>{
    render( <BrowserRouter>
        <Provider store={appstore}>
        <Header/> 
         </Provider>
         </BrowserRouter>)
   
    
    const login = screen.getByRole("button", {name: "Login"});
    fireEvent.click(login);
    expect(login).toBeInTheDocument();

    const logout = screen.getByRole("button", {name: "Logout"});
    fireEvent.click(logout);
    expect(logout).toBeInTheDocument();

})