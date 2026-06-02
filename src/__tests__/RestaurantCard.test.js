import RestaurantCard from "../components/RestaurantCard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MOCK_RESTAURANT } from "../utils/mockResCard.js";

it("should load restaurant card with data (props)", ()=> {

    render(<RestaurantCard resData={MOCK_RESTAURANT}/>)
    const restaurantName = screen.getByText("Pizza Hut");

  expect(restaurantName).toBeInTheDocument();



})