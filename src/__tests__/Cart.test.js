import { render, act, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";
import Header from "../components/Header";
import ResturantMenu from "../components/RestaurantMenu";
import "@testing-library/jest-dom";
import  MOCK_DATA  from "../utils/mockData";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
);

it("should render restaurant menu", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <ResturantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });


    const accordianHeader=await screen.findByText("Signature Burgers (3)");
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("menu-item")).toHaveLength(3);



    const addBtns= await screen.findAllByRole("button", { name: /add/i });
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart-1")).toBeInTheDocument();
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart-2")).toBeInTheDocument();



    fireEvent.click(screen.getByRole("button", { name: /clear cart/i }));
    expect(screen.getByText("Your cart is empty 😢")).toBeInTheDocument();
    
  

  });