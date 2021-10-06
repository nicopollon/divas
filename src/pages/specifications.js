import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/specificationspage/hero"
import EndPage from "../components/specificationspage/pageEnd"
import Specs from "../components/specificationspage/specs"
const Specifications = () => (
  <Layout>
    <Seo title="Divas Lift Specifications" />
    <Hero></Hero>
    <Specs></Specs>
    <EndPage></EndPage>
  </Layout>
)

export default Specifications
