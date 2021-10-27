import * as React from "react"
import {
  SectionBase,
  InfoBox,
  Title,
  NavLink,
  PillLabel,
} from "./secondSectionElements.js"
import "./secondSection.css"
const SecondSection = () => {
  return (
    <SectionBase>
      <InfoBox>
        <PillLabel>Specifications</PillLabel>
        <Title>Divas for your home</Title>

        <p>
          Learn about the different standard solutions we provide for your home
          lift, doesn't fit? <br />
          Contact us to get a bespoke solution
        </p>
        <NavLink to="/specifications"> Learn Specs →</NavLink>
      </InfoBox>
    </SectionBase>
  )
}

export default SecondSection
