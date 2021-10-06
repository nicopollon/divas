import styled from "styled-components"
import { Link } from "gatsby"
const Foot = styled.footer`
  display: flex;
  width: 100%;
  padding: 1rem;
  color: #fff;
  background-color: #1a5090;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const FooterColumn = styled.div`
  width: 50%;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  text-decoration: none;
  color: #fff;
`
const FootLink = styled(Link)`
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
`
export { Foot, FooterColumn, FooterList, FootLink }
