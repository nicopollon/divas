import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  SectionBase,
  InfoBox,
  Separator,
  CtaBtn,
  ImageBox,
  NavLink,
} from "./secondSectionElements.js"
const SecondSection = () => {
  return (
    <SectionBase>
      <InfoBox>
        <p>Penthouse and Villas</p>
        <h2>Luxury Divas</h2>

        <Separator />

        <p>This luxury line is perfect for buildings with stylish design</p>
        <CtaBtn>
          <NavLink to="/">Learn more</NavLink>
        </CtaBtn>
      </InfoBox>
      <ImageBox>
        <StaticImage
          src="../../../images/cabin.png"
          alt="Luxury divas cabin"
          quality={95}
          imgStyle={{
            objectFit: "contain",
          }}
          formats={["auto", "webp", "avif"]}
        ></StaticImage>
        <StaticImage
          src="../../../images/cabin.png"
          alt="Luxury divas cabin"
          quality={95}
          imgStyle={{
            objectFit: "contain",
          }}
          formats={["auto", "webp", "avif"]}
        ></StaticImage>
      </ImageBox>
    </SectionBase>
  )
}

export default SecondSection
