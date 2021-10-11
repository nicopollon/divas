import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  SectionBase,
  InfoBox,
  Separator,
  CtaBtn,
  NavLink,
} from "./secondSectionElements.js"
import "./secondSection.css"
const SecondSection = () => {
  return (
    <SectionBase>
      <InfoBox>
        <p>Penthouse and Villas</p>
        <h2>Luxury Divas</h2>

        <Separator />

        <p>This luxury line is perfect for buildings with stylish design</p>
        <NavLink to="/">
          {" "}
          <CtaBtn>Learn more</CtaBtn>
        </NavLink>
      </InfoBox>

      <StaticImage
        src="../../../images/divas-inside.jpeg"
        alt="Luxury divas cabin"
        quality={95}
        objectFit="contain"
        className="image"
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
      ></StaticImage>
    </SectionBase>
  )
}

export default SecondSection
