import styled from "styled-components"
export const Button = styled.button`
  padding: 16px 30px;
  border-radius: 50px;
  background-color: ${props => (props.selected ? "white" : "transparent")};
  color: ${props => (props.selected ? "#1a5090" : "#685e7f")};
  box-shadow: ${props =>
    props.selected
      ? "2px 2px 3px 0 rgb(140 135 166 / 12%), 3px 7px 12px 0 rgb(140 135 166 / 8%), 1px 14px 24px 0 rgb(140 135 166 / 8%)"
      : "none"};
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  border: none;
  font-weight: 600;
  transition: 0.2s;
  &:hover {
    background-color: white;
    box-shadow: none;
  }
`
export const SubmitButton = styled.button`
  padding: 15px 30px;
  border-radius: 50px;
  color: white;
  background-color: #1a5090;
  border: none;
  font-size: 24px;
  font-weight: 600;
  box-shadow: 2px 2px 3px 0 rgb(140 135 166 / 12%),
    3px 7px 12px 0 rgb(140 135 166 / 8%), 1px 14px 24px 0 rgb(140 135 166 / 8%);

  transition: 0.3s;
  &:hover {
    background-color: #041c2c;
  }
`
