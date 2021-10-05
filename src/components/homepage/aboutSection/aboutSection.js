import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, PreTitle } from "./aboutComponents.js"

const AboutSection = () => {
  return (
    <Section>
      <StaticImage
        src="../../images/movilift.png"
        alt="Our company building "
        imgStyle={{
          objectFit: "contain",
        }}
      ></StaticImage>

      <Container>
        <PreTitle>About Us</PreTitle>
        <h2>ELEVATOR TRADITION</h2>
        <p>
          From a sustainable ancient artesian aquifer in Fiji to more than 60
          countries across the globe, FIJI Water has been bringing Earth’s
          Finest Water to the world since 1996. Along the way, its philanthropic
          efforts have focused on improving the lives of the people of Fiji, and
          protecting the unique place they call home.
        </p>
      </Container>
    </Section>
  )
}
export default AboutSection
