import React from "react"
import { Foot, FooterList, FooterColumn, FootLink } from "./footerElements"
const Footer = () => {
  return (
    <Foot>
      <FooterColumn>
        <h3>MoviLift</h3>
        <FooterList>
          <li>+39 081 871 36 46</li>
          <li>marketing@movilift.com</li>
          <li>Strada Napoli 350, Castellammare di Stabia 80053, Napoli</li>
          <li>P.IVA : 03971331214 Cap. soc : €98.000,00</li>
        </FooterList>
      </FooterColumn>
      <FooterColumn>
        <h3>Links</h3>

        <FooterList>
          <li>
            <FootLink to="/">Home</FootLink>
          </li>
          <li>
            <FootLink to="/specifications">Specifications</FootLink>
          </li>
          <li>
            <FootLink to="/divas">Design</FootLink>
          </li>
          <li>
            <FootLink to="/">Inquiry</FootLink>
          </li>
        </FooterList>
      </FooterColumn>
    </Foot>
  )
}
export default Footer
