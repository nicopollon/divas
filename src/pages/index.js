import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "..components/hero"
import SecondSection from "../components/homepage/secondsection/secondSection"
import PageEnd from "../components/homepage/pageEnd/pageEnd"
import ThirdSection from "../components/homepage/thirdsection/thirdsection"
const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Hero></Hero>

    <SecondSection></SecondSection>
    <ThirdSection></ThirdSection>
    <PageEnd></PageEnd>
  </Layout>
)
export default IndexPage
