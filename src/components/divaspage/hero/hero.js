import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import {
  HeroSection,
  TextBox,
  Subtitle,
  Title,
  Specs,
  SpecsTitle,
} from "./heroElements"

const Hero = () => {
  return (
    <HeroSection>
      <StaticImage
        src="../../../images/cabin.png"
        alt="A luxurious divas cabin"
        imgStyle={{
          objectFit: "contain",
        }}
        width={350}
        formats={["auto", "webp", "avif"]}
        quality={95}
      ></StaticImage>
      <TextBox>
        <Subtitle>For building with style</Subtitle>
        <Title>Luxury Divas</Title>
        <SpecsTitle>Specifcations:</SpecsTitle>
        <Specs>
          <li>
            <b>Stops</b> 7
          </li>
          <li>
            <b>Speed</b> 0,15 m/s (ip to 0,30)
          </li>
          <li>
            <b>Pit</b> 180mm min
          </li>
          <li>
            <b>Headroom</b> 2450mm
          </li>
          <li>
            <b>Travel</b> 25000mm max
          </li>
          <li>
            <b>Power supply</b> 220v Single-phase / Three-phase
          </li>
        </Specs>
      </TextBox>
    </HeroSection>
  )
}
export default Hero
