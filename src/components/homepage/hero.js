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
  align-items: stretch !important;
  align-items: flex-start;
  background: linear-gradient(rgba(26, 80, 144, 0.69), rgba(26, 80, 144, 0.69)),
    /* bottom, image */ url(${img});
`
const TextBox = styled.div`
  position: absolute;
  padding: 0 5vw;
`
const CtaBtn = styled.button`
  background-color: #a3c8d5;
  width: 85%;
  border: 3px solid #ffffff;
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
  font-size: 64px;
`

/* const FakeBgImage = styled(StaticImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
  } `*/

const HeroHome = () => {
  return (
    <HeroBase>
      {/* <StaticImage
        src="../images/hero-bg.jpg"
        alt="bgimage"
        imgStyle={{ zIndex: -1, objectFit: "cover" }}
      /> */}
      <TextBox>
        <Hero4Text>Movilift's</Hero4Text>
        <HeroText>
          Divas lift,
          <br /> your home lift
        </HeroText>
        <CtaBtn>
          <Link to="/" style={{ color: "#000000" }}>
            CONTACT US NOW
          </Link>
        </CtaBtn>
      </TextBox>
    </HeroBase>
  )
}
export default HeroHome
