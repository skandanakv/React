import { render } from "@testing-library/react";
import {act} from 'react';
import { BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import { mockResList } from "../utils/mockResList";

global.fetch =jest.fn(()=>{
    return Promise.resolve({
        json :()=> {
            return Promise.resolve(mockResList);
    }
});
})

test("should render body component with search", async()=>{

    await act ( async => (render(
        <BrowserRouter>
    <Body/>
    </BrowserRouter>
    )
))
})