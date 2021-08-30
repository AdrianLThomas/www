import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Hero from "./hero"
import { fullWindowWidth } from "../commonStyles"

const Footer  = styled.footer`
  ${fullWindowWidth()}
  text-align: center;

  & > span,a {
    margin-right: 15px;
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const data = useStaticQuery(graphql`
  query FooterQuery {
    site {
      siteMetadata {
        author {
          name
          summary
        }
        social {
          twitter
          linkedIn
        }
        siteUrl
      }
    }
  }
  `)
  const social = data.site.siteMetadata?.social

  let header

  if (isRootPath) {
    header = (
      <Hero/>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <Footer>
        <span>© {new Date().getFullYear()}</span>

        <a href={`https://twitter.com/${social.twitter}`}>
          Twitter
        </a>

        <a href={`https://www.linkedin.com/in/${social.linkedIn}`}>
          LinkedIn
        </a>

        <Link href="/rss.xml">RSS</Link>
      </Footer>
    </div>
  )
}

export default Layout
