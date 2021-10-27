import styled from "styled-components"

const Section = styled.div`
  background-color: #041c2c;
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  color: #fff;
  margin-top: 32px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export { Section, Container }
