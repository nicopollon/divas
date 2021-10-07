import React from "react"
import styled from "styled-components"
import "./hero.css"

const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #1a5090;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    transform: translateY(-4px);
    transition: transform 0.5s ease-out;
  }
`
const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">Divas Specifications</h1>
      <p className="hero-subtitle">Learn about the in-n-outs of divas</p>
      <Button> Get an inquiry</Button>
    </div>
  )
}
export default Hero
