import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({adapter: new Adapter()})

describe("when the Footer loads...", () => {
  it("display a navlink on the header", () => {
    const renderedFooter = shallow(<Footer/>)
    const navLinkWrapper = renderedFooter.find("NavLink")
    expect(navLinkWrapper.length).toEqual(1)

  })
  it("display a section on the header", () => {
    const renderedFooter = shallow(<Footer/>)
    const sectionWrapper = renderedFooter.find("section")
    expect(sectionWrapper.length).toEqual(2)

  })
})