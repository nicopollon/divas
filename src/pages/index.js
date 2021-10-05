import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroHome from "../components/homepage/hero"
import IconRow from "../components/homepage/iconrow"
import SecondSection from "../components/homepage/secondsection/secondSection"
import AboutSection from "../components/homepage/aboutSection/aboutSection"
import PageEnd from "../components/homepage/pageEnd/pageEnd"
const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroHome></HeroHome>
    <IconRow></IconRow>
    <SecondSection></SecondSection>
    <AboutSection></AboutSection>
    <PageEnd></PageEnd>
  </Layout>
)
export default IndexPage
