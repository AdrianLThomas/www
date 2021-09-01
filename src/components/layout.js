import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Hero from "./hero"
import { fullWindowWidth } from "../commonStyles"


const Footer  = styled.footer`
  ${fullWindowWidth()}
  text-align: center;
  border-top: 0.5rem solid dodgerblue;

  & > span,a {
    margin-right: 15px;
  }

  margin-top: auto;
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
  const social = data.site.siteMetadata.social

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header"><Hero/></header>
      <main>{children}</main>
        <Footer>
          <span>© {new Date().getFullYear()}</span>

          <Link href="/blog">Blog</Link>

          <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noreferrer">
            Twitter
          </a>

          <a href={`https://www.linkedin.com/in/${social.linkedIn}`} target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <Link href="/rss.xml" target="_blank" rel="noreferrer">RSS</Link>
        </Footer>
    </div>
  )
}

export default Layout
