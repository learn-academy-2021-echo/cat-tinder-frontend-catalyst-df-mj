import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatIndex from "./CatIndex";

Enzyme.configure({ adapter: new Adapter() });

describe("when the CatIndex loads...", () => {
  it("displays the h2", () => {
    //Arrange
    const renderedCatIndex = shallow(<CatIndex />);
    //variable that class on shallow which is passed an arguemnt
    const renderedCatIndexRoute = renderedCatIndex.find("h2").text();
    //Assert
    expect(renderedCatIndexRoute).toEqual("This is CatIndex");
  });
});
