import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { PaypalButtons } from "../components/paypalButtons"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Checkout = () => (
  <Layout>
    <Seo title="Donate" />
    <h2>Select Your payment Option</h2>
    <div style={{margin: `0 auto`, maxWidth: `600px`}}><PaypalButtons /></div>
    <p>The sticker is 5.5 inches wide and 2.14 inches tall. It fits nicely on car bumpers and guitars.</p>
    <StaticImage
      src="../images/keepspaceblack.png"
      alt="swirling galaxy sticker with Keep Space Black emblazoned"
      placeholder="blurred"
    />
    <h2>Questions</h2>
    <p><em>Is this a scam?</em></p>
    <p>If I asked you "Are you a scam?", you would probably say no too.</p>
    <p><em>Can I trust you with my mailing address?</em></p>
    <p>Yes. You can absolutely trust me. I made this fun sticker, no?</p>
    <p><em>Who are you?</em></p>
    <p>I am Kevin Fredericks. I represent the League to Keep Space Black.</p>
    <p><em>Who am I?</em></p>
    <p>As stated, we are dedicated to Keeping Spack Black.</p>
    <p><em>Is this a great sticker?</em></p>
    <p>Yes. It is a great sticker.</p>
  </Layout>
)

export default Checkout;
