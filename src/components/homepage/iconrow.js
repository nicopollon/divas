import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FaAccessibleIcon } from "react-icons/fa"
import ItalySVG from "../../svg/italy.svg"
import CeSVG from "../../svg/ce.svg"
import "./iconrow.css"
const IconSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  background-color: #041c2c;
`
export const ColumnIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CircleIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: #fff;
  color: #1a5090;
  display: flex;
  justify-content: center;
  align-items: baseline;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    align-items: baseline;
  }
`
const IconText = styled.p`
  color: white;
  font-size: 100%;
`
const IconRow = ({ children }) => {
  return (
    <IconSection>
      <div className="icon-row">
        <CircleIcon children={<ItalySVG className="icon" />}></CircleIcon>

        <CircleIcon
          children={<FaAccessibleIcon className="icon" />}
        ></CircleIcon>

        <CircleIcon children={<CeSVG className="icon" />}></CircleIcon>
      </div>
      <div className="icon-row">
        <IconText>Made in Italy</IconText>
        <IconText>Accessibility</IconText>
        <IconText>European Certified</IconText>
      </div>
    </IconSection>
  )
}

ColumnIcon.propTypes = {
  children: PropTypes.node,
}
export default IconRow
