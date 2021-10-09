/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          display: `flex`,
          flexFlow: `column`,
          justifyContent: `center`,
          maxWidth: `100%`,
          padding: `5rem 1.0875rem 1.45rem`,
          background: `black`
        }}
      >
        <main
          style={{
            margin: `0 auto`,
          }}
        >{children}</main>
        <footer
          style={{
            margin: `0 auto`,
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, League to Keep Space Black
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
