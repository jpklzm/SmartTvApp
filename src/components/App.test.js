import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  test("renders", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
