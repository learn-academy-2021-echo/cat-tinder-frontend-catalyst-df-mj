import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatShow from "./CatShow";

Enzyme.configure({ adapter: new Adapter() });

describe("when the CatNew loads...", () => {
    it("displays the h4", () => {
      //Arrange
      const renderedCatNew = shallow(<CatNew />);
      //variable that class on shallow which is passed an arguemnt
      const navLinkWrapper = renderedCatNew.find("h3").text();
      //Assert
      expect(navLinkWrapper.length.toEqual(1);
    });
    it("displays a form", () => {
        //Arrange
        const renderedCatNew = shallow(<CatShow />);
        //variable that class on shallow which is passed an arguemnt
        const formWrapper = renderedCatNew.find("Form");
        //Assert
        expect(formWrapper.length).toEqual(1);
      });
    });
  


    