import React from "react";
import { shallow } from "enzyme";
import SeriesList from "./SeriesList";

describe("SeriesList component", () => {
  test("renders", () => {
    const wrapper = shallow(<SeriesList />);

    expect(wrapper.exists()).toBe(true);
  });
});
