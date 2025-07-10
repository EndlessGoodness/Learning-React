import {describe, it, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App component",()=>{
    it("renders correct heading",()=>{
        const container=render(<App/>);
        expect(container).toMatchSnapshot();
    });
    it("button works correctly", async ()=>{
        const user=userEvent.setup();

        render(<App/>);
        const button=screen.getByRole("button",{name:"change"});
        await user.click(button);
        expect(screen.getByRole("heading").textContent).toMatch(/Rabba/i);
    });
});