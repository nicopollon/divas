import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import img from "../../images/hero-bg.jpg"
const HeroBase = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  background: linear-gradient(rgba(26, 80, 144, 0.69), rgba(26, 80, 144, 0.69)),
    /* bottom, image */ url(${img}) center center/cover no-repeat;
`
const TextBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0 5vw;
  width: 100%;
  align-items: center;
`
const CtaBtn = styled.button`
  background-color: #a3c8d5;
  padding: 10px 30px;
  cursor: pointer;

  border: 3px solid #ffffff;
  font-size: 1.5rem;
`

const Hero4Text = styled.h4`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 0;
  font-weight: 300;
`

const HeroText = styled.h1`
  color: white;

  font-weight: 600;
  font-size: 70px;
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
        </HeroText>{" "}
        <Link to="/">
          <CtaBtn>CONTACT US NOW</CtaBtn>
        </Link>
      </TextBox>
    </HeroBase>
  )
}
export default HeroHome
