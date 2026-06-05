import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Body from "../components/Body";
import { mockResList } from "../utils/mockResList";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockResList),
  })
);

test("should render body component with search button", async () => {

    await act(async () => {
        render(
          <BrowserRouter>
            <Body />
          </BrowserRouter>
        );
      });

      const searchBtn = await screen.findByRole("button", {
        name: /search/i,
      });

  expect(searchBtn).toBeInTheDocument();

  const searchInput = await screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();

   fireEvent.change(searchInput, { target: { value: "Burger" } });
    fireEvent.click(searchBtn);

    const cards= await screen.findAllByTestId("res-list");
    expect(cards).toHaveLength(1);

   

    // const restaurantName = await screen.findByText("Pizza Paradise");
    // expect(restaurantName).toBeInTheDocument();



});




