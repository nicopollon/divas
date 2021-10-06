import React from "react"
import styled from "styled-components"
const Section = styled.div`
  display: flex;
  min-height: 80vh;
  padding: 1em;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Container = styled.div`
  padding: 1em;
  width: 100%;
`
const PreTitle = styled.h3`
  margin-bottom: 2px;
  font-weight: 400;
`

export { Section, Container, PreTitle }
