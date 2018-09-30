import React from "react"
import { shallow } from "enzyme"
import Search from "../src/components/search"

describe("this is a test", () => {
    test("checking to see if everything is hooked up", () => {
        const wrapper = shallow(<Search />)
        expect(wrapper.html()).toEqual("<div></div>")
    })
})