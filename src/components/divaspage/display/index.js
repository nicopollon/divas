import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./display.css"
import { ColumnIcon, CircleIcon } from "../../homepage/iconrow.js"
import styled from "styled-components"
import { FaPencilRuler } from "react-icons/fa"
import { MdTouchApp } from "react-icons/md"

const SquareIcon = styled(CircleIcon)`
  background-color: #1a5090;
  border-radius: 8px;
  color: #fff;
  font-size: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Display = () => {
  return (
    <div className="display-container">
      <h1>TFT Display</h1>
      <div className="row-container">
        <ColumnIcon>
          <SquareIcon>
            <FaPencilRuler className="iconDisplay" />
          </SquareIcon>
          <p className="icon-text">
            Our displays are fully customizable to fit your building style
          </p>
        </ColumnIcon>
        <StaticImage height="100%" src="../../../images/tft.png"></StaticImage>
        <ColumnIcon>
          <SquareIcon>
            <MdTouchApp className="iconDisplay" />
          </SquareIcon>
          <p className="icon-text">
            Choose the display solution that best fits your elevator
          </p>
        </ColumnIcon>
      </div>
    </div>
  )
}

export default Display
