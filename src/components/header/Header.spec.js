import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header component", () => {
  test("renders", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists()).toBe(true);
  });
});
