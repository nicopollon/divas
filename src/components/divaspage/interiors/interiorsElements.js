import styled from "styled-components"

const InteriorBase = styled.div`
  height: 80vh;
  width: 100%;
  background: linear-gradient(0deg, #041c2c, #041c2c),
    radial-gradient(47.41% 47.41% at 50% 52.59%, #4e9fff 0%, #0b3a71 100%);
  display: flex;
`
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
`

const Subtitle = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1rem;
`
const Title = styled.h1`
  font-family: "Prata", serif;
  font-size: 2.5rem;
`
export { InteriorBase, TextBox, Subtitle, Title }
