import React from "react";
import { shallow } from "enzyme";
import SerieCard from "./SerieCard";

const Mock = {
  serie: {
    images: {
      landscape: {
        url: "https://via.placeholder.com/350x150",
      },
    },
  },
};

describe("SerieCard component", () => {
  const wrapper = shallow(<SerieCard serie={Mock} />);

  test("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("it has an image", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });
});
