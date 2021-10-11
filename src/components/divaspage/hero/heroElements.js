import styled from "styled-components"
import imgurl from "../../../images/divascabin.jpeg"
const HeroSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: #1a5090;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    background: linear-gradient(
        rgba(26, 80, 144, 0.69),
        rgba(26, 80, 144, 0.69)
      ),
      url(${imgurl});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 1rem;
  flex: 1;
  text-align: start;
  @media (max-width: 960px) {
    justify-content: center;
  }
`

const Subtitle = styled.h4`
  margin-bottom: 0.5rem;
  font-weight: 400;
`
const Title = styled.h1`
  font-family: "Prata", serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`
const Specs = styled.ul`
  list-style: none;
  margin-left: 0;
`
const SpecsTitle = styled.p`
  margin-bottom: 1rem;
`
export { HeroSection, TextBox, Subtitle, Title, Specs, SpecsTitle }
