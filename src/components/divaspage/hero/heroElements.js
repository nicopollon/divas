import styled from "styled-components"

const HeroSection = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  background-color: #1a5090;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 1rem;
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
