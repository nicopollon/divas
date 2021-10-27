import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
export const SectionBase = styled.div`
  display: flex;

  justify-content: start;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`
export const InfoBox = styled.div`
  padding: 60px 24px;
`
export const PillLabel = styled.div`
  font-size: 14px;
  line-height: 1.5;
  background-color: #76c893;
  border-radius: 100px;
  font-weight: 700;
  width: fit-content;
  color: #fff;
  padding: 6px 16px;
  margin-bottom: 24px;
`

export const Title = styled.div`
  font-weight: 700;
  line-height: 1.2;
  font-size: 2rem;
  margin-bottom: 20px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: #76c893;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`
