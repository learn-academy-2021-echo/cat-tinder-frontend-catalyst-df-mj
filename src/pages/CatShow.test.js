import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatShow from "./CatShow";

Enzyme.configure({ adapter: new Adapter() });

describe("when the CatShow loads...", () => {
  it("displays the h3", () => {
    //Arrange
    const renderedCatShow = shallow(<CatShow />);
    //variable that class on shallow which is passed an arguemnt
    const renderedCatShowRoute = renderedCatShow.find("h3").text();
    //Assert
    expect(renderedCatShowRoute).toEqual("Here is one Profile");
  });
});
