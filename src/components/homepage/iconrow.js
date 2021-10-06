import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FaAccessibleIcon } from "react-icons/fa"
import ItalySVG from "../../svg/italy.svg"
import CeSVG from "../../svg/ce.svg"
import "./iconrow.css"
const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #041c2c;
`
export const ColumnIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
`

export const CircleIcon = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: #fff;
  color: #1a5090;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
  margin-bottom: 10px;
`
const IconText = styled.p`
  color: white;
  margin-bottom: 0;
`
const IconRow = ({ children }) => {
  return (
    <RowContainer>
      <ColumnIcon>
        <CircleIcon children={<ItalySVG className="icon" />}></CircleIcon>

        <IconText>Made in Italy</IconText>
      </ColumnIcon>

      <ColumnIcon>
        <CircleIcon
          children={<FaAccessibleIcon className="icon" />}
        ></CircleIcon>
        <IconText>Accessibility</IconText>
      </ColumnIcon>

      <ColumnIcon>
        <CircleIcon children={<CeSVG className="icon" />}></CircleIcon>
        <IconText>European Certified</IconText>
      </ColumnIcon>
    </RowContainer>
  )
}

ColumnIcon.propTypes = {
  children: PropTypes.node,
}
export default IconRow
