import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const RowContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #041c2c;
`
const ColumnIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
`

const CircleIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
  margin-bottom: 10px;
`
const IconText = styled.p`
  color: white;
`
const IconRow = ({ children }) => {
  return (
    <RowContainer>
      <ColumnIcon>
        <CircleIcon children={"sad"}></CircleIcon>

        <IconText>Made in Italy</IconText>
      </ColumnIcon>

      <ColumnIcon>
        <CircleIcon children={children}></CircleIcon>
        <IconText>Accessibility</IconText>
      </ColumnIcon>

      <ColumnIcon>
        <CircleIcon children={children}></CircleIcon>
        <IconText>European Certified</IconText>
      </ColumnIcon>
    </RowContainer>
  )
}

ColumnIcon.propTypes = {
  children: PropTypes.node,
}
export default IconRow
