import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({adapter: new Adapter()})

describe("when the header loads...", () => {
  let header

  beforeEach(() => {
    header = shallow(<Header/>)
  })

  it("displays a navlink on the header", () => {
    const navLinkWrapper = header.find("NavLink")
    expect(navLinkWrapper.length).toEqual(3)
  })

  it("displays a section on the header", () => {
    const sectionWrapper = header.find("section")
    expect(sectionWrapper.length).toEqual(2)
  })
})