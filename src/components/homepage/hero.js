import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import img from "../../images/hero-bg.jpg"
import { StaticImage } from "gatsby-plugin-image"
import "./hero.css"
const HeroBase = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(rgba(26, 80, 144, 0.69), rgba(26, 80, 144, 0.69)),
    /* bottom, image */ url(${img}) center center/cover no-repeat;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    height: auto;
  }
`
const TextBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;
  align-items: flex-start;
`
const CtaBtn = styled.button`
  background-color: #a3c8d5;
  padding: 10px 30px;
  cursor: pointer;
  border: 3px solid #ffffff;
  font-size: 1.5rem;
  transition: 0.2s ease-out;
  &:hover {
    background-color: #ffffff;
    color: #041c2c;
    border: 3px solid #a3c8d5;
  }
`

const Hero4Text = styled.h4`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 0;
  font-weight: 300;
`

const HeroText = styled.h1`
  color: white;
  text-align: left;
  font-weight: 600;
  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 3rem;

    text-align: center;
  }
`

const HeroHome = () => {
  return (
    <HeroBase>
      <TextBox>
        {/* 
        <Hero4Text>Movilift's</Hero4Text> */}
        <HeroText>
          Divas lift,
          <br /> your home lift
        </HeroText>
        <Link to="/contact">
          <CtaBtn>CONTACT US NOW</CtaBtn>
        </Link>
      </TextBox>
      <StaticImage
        className="hero-image"
        src="../../images/divas-front-bg.png"
        alt="Divas lift platform home elevator"
        objectFit="contain"
        quality={95}
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
      ></StaticImage>
    </HeroBase>
  )
}
export default HeroHome
