import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Logo from "./Logo"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #ffffff;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #ffffff;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    color: #041c2c;
    :after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0%;
      content: ".";
      color: transparent;
      background: #041c2c;
      height: 1px;
      transition: all 0.4s ease-in;
    }

    :hover {
      color: #041c2c;
      ::after {
        width: 100%;
      }
    }
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/divas">Divas</NavItem>
      <NavItem to="/404">Services</NavItem>
      <Logo />
      <NavItem to="/">Gallery</NavItem>
      <NavItem to="/404">Contact</NavItem>
    </>
  )
}

export default NavbarLinks
