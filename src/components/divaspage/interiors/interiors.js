import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { InteriorBase, TextBox, Subtitle, Title } from "./interiorsElements"

const Interior = () => {
  return (
    <InteriorBase>
      <TextBox>
        <Title>Designer Interiors</Title>
        <Subtitle>
          Explore our custom solutions for your divas lift, we collaborate with
          local artisans to provide the premium look for your home elevator.
        </Subtitle>
      </TextBox>
      <StaticImage src="../../../images/interiors.png"></StaticImage>
    </InteriorBase>
  )
}
export default Interior
