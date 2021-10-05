import * as React from "react"
import Hero from "../components/divaspage/hero/hero"
import Interior from "../components/divaspage/interiors/interiors"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Divas = () => (
  <Layout>
    <Seo title="Divas Lift" />
    <Hero></Hero>
    <Interior></Interior>
  </Layout>
)

export default Divas
