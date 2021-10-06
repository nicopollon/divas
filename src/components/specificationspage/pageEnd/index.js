import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./endpage.css"

const Button = styled.button`
  padding: 10px 20px;
  border: 2px solid #fff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${props => (props.primary ? "white" : "white")};
  background: ${props => (props.primary ? "#1a5090" : "transparent")};
  &:hover {
    transform: scale(1.1, 1.1);

    transition: transform 0.5s ease-out;
  }
`

const EndPage = () => {
  return (
    <div className="endpage-section">
      <h2>That's it!</h2>
      <h3>Looking for more?</h3>
      <p>Check out the catalogue or contact our sales team</p>
      <div className="buttons-row">
        <a href="https://www.dropbox.com/s/26s0gyz1p6l153d/MOVILIFT%20lift%20controller%20installation%20manual_V1.20%20ENG.pdf?dl=1">
          <Button>Catalogue</Button>
        </a>
        <Link to="/divas">
          <Button primary>Contact</Button>
        </Link>{" "}
      </div>
    </div>
  )
}

export default EndPage
