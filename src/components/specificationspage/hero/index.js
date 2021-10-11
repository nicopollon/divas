import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import "./hero.css"

const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #1a5090;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.4s ease-out;
  border: none;
  font-weight: 600;
  &:hover {
    transform: translateY(-4px);
    color: #1a5090;
    background-color: #fff;
    border: 3px solid #1a5090;
  }
`
const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">Divas Specifications</h1>
      <p className="hero-subtitle">Learn about the in-n-outs of divas</p>
      <Link to="/contact/">
        <Button> Get an inquiry</Button>
      </Link>
    </div>
  )
}
export default Hero
