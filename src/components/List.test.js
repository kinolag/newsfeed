import React from "react";
import { shallow } from "enzyme";
import List from "./List";

/* shallow is a function from the enzyme library, used to render the component inside the test */

describe("<List />", () => {
  /* can declare shared variables here */
  const wrapper = shallow(<List />);

  it("checking number of buttons", () => {
    /* NB: if using mount instead of shallow, button length will be 11!
     mounting = Full DOM rendering including child components */
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("checking button text", () => {
    const button = wrapper.find("button");
    const label = button.text();
    expect(label).toBe("Back to top");
  });
});
