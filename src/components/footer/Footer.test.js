import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer component", () => {
  test("renders", () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.exists()).toBe(true);
  });
});
