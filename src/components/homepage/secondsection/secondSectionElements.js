import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
export const SectionBase = styled.div`
  background: radial-gradient(
    47.41% 47.41% at 50% 52.59%,
    #4e9fff 0%,
    #0b3a71 100%
  );
  height: 100vh;
  display: flex;
  padding: 1.5rem;
  justify-content: space-evenly;
  align-items: stretch;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    height: auto;
  }
`
export const InfoBox = styled.div`
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(129, 129, 129, 0.11) 100%
    ),
    #041c2c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  margin: 2em;
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Separator = styled.div`
  border: 0;
  width: 100%;
  height: 2px;
  background: #a3c8d5;
  margin: 1em;
`

export const CtaBtn = styled.button`
  cursor: pointer;
  background-color: #a3c8d5;
  width: 100%;
  padding: 10px 30px;
  text-decoration: none;
  border: 3px solid #ffffff;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.5rem;
`

export const ImageBox = styled.div`
  display: flex;
  padding: 1.5rem;
`
