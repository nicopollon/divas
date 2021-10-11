import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./display.css"
import { ColumnIcon, CircleIcon } from "../../homepage/iconrow.js"
import styled from "styled-components"
import { FaPencilRuler } from "react-icons/fa"
import { MdTouchApp } from "react-icons/md"

const Display = () => {
  return (
    <div className="display-container">
      <h1>TFT Display</h1>
      <div className="row-container">
        <div className="col">
          <ColumnIcon>
            <FaPencilRuler className="iconDisplay" />
            <p className="icon-text">
              Our displays are fully customizable to fit your building style
            </p>
          </ColumnIcon>
          <ColumnIcon>
            <MdTouchApp className="iconDisplay" />
            <p className="icon-text">
              Choose the display solution that best fits your elevator
            </p>
          </ColumnIcon>
        </div>
        <StaticImage
          className="tft-image "
          src="../../../images/tft.png"
        ></StaticImage>
      </div>
    </div>
  )
}

export default Display
