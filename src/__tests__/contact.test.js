import Contact from "../components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 

test("contact component should load correctly", ()=>{

    render(<Contact/>);
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument();

})


test("should load submit button in the contact form", ()=>{

    render(<Contact/>);
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument();

})

test("should load text in the contact form", ()=>{

    render(<Contact/>);
    const button = screen.getByText("Submit")
    expect(button).toBeInTheDocument();

})

test("should load 2 input boxes in the contact form", ()=>{

    render(<Contact/>);

    const inputBox = screen.getAllByRole("textbox")
    
    expect(inputBox.length).toBe(3);

})