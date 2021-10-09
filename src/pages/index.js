import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Link to='/donate/'><h1>DONATE</h1></Link>
    <p>paid for by the league to keep space black</p>
  </Layout>
)

export default IndexPage
