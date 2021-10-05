import React from "react"
import { Foot, FooterList, FooterColumn, FootLink } from "./footerElements"
const Footer = () => {
  return (
    <Foot>
      <FooterColumn>
        <h5>MoviLift</h5>
        <FooterList>
          <li>+39 081 871 36 46</li>
          <li>marketin@movilift.com</li>
          <li>Strada Napoli 350, Castellammare di Stabia 80053, Napoli</li>
          <li>P.IVA : 03971331214 Cap. soc : €98.000,00</li>
        </FooterList>
      </FooterColumn>
      <FooterColumn>
        <h5>Links</h5>

        <FooterList>
          <li>
            <FootLink to="/">Home</FootLink>
          </li>
          <li>
            <FootLink to="/">Home</FootLink>
          </li>
          <li>
            <FootLink to="/">Home</FootLink>
          </li>
          <li>
            <FootLink to="/">Home</FootLink>
          </li>
        </FooterList>
      </FooterColumn>
    </Foot>
  )
}
export default Footer
