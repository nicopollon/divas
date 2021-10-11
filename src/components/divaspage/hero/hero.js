import { StaticImage } from "gatsby-plugin-image"

import React from "react"
import "./hero.css"
import { HeroSection, TextBox, Subtitle, Title } from "./heroElements"

const Hero = () => {
  return (
    <HeroSection>
      <StaticImage
        className="img"
        src="../../../images/divascabin.jpeg"
        alt="A luxurious divas cabin"
        quality={95}
      ></StaticImage>
      <TextBox>
        <Subtitle>For building with style</Subtitle>
        <Title>Luxury Divas</Title>
      </TextBox>
    </HeroSection>
  )
}
export default Hero
