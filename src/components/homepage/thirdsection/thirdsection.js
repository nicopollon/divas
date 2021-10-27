import React from "react"
import {
  SectionBase,
  InfoBox,
  Title,
  NavLink,
  PillLabel,
} from "../secondsection/secondSectionElements.js"
import "../secondsection/secondSection.css"

const ThirdSection = () => {
  return (
    <SectionBase>
      <InfoBox>
        <PillLabel>Design</PillLabel>
        <Title>Style your lift</Title>
        <p>
          Discover all of our customization options, learn how we choose only
          the best materials for our Luxury series
        </p>{" "}
        <NavLink to="/divas">Learn Design →</NavLink>
      </InfoBox>
    </SectionBase>
  )
}
export default ThirdSection
