import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
export const SectionBase = styled.div`
  /* background: radial-gradient(
    47.41% 47.41% at 50% 52.59%,
    #4e9fff 0%,
    #0b3a71 100%
  ); */
  display: flex;

  //padding: 1.5rem;
  height: 100vh;
  justify-content: space-between;
  align-items: stretch;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
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
  margin: 1rem;
  display: flex;
  flex: 1;
  padding: 1rem;
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
  margin: 1rem;
`

export const CtaBtn = styled.button`
  cursor: pointer;
  background-color: #a3c8d5;
  width: 100%;
  padding: 10px 30px;
  text-decoration: none;
  border: 3px solid #ffffff;
  transition: 0.2s ease-out;
  &:hover {
    background-color: #ffffff;
    color: #041c2c;
    border: 3px solid #a3c8d5;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.5rem;
`
