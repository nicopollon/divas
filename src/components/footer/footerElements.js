import styled from "styled-components"
import { Link } from "gatsby"
const Foot = styled.footer`
  display: flex;
  width: 100%;
  padding: 1rem;
  color: #fff;
  background-color: #1a5090;
`
const FooterColumn = styled.div`
  width: 30%;
  padding: 1rem;
`
const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  text-decoration: none;
  color: #fff;
`
const FootLink = styled(Link)`
  color: #fff;
`
export { Foot, FooterColumn, FooterList, FootLink }
