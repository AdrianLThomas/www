import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Hero from "./hero"

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
      <footer>
        © {new Date().getFullYear()}
        &nbsp;&nbsp;
        <a href={data.site.siteMetadata.siteUrl}>adrian-thomas.com</a>
        &nbsp;&nbsp;
        <a href={`https://twitter.com/${social.twitter}`}>
          Twitter
        </a>
        &nbsp;&nbsp;
        <a href={`https://www.linkedin.com/in/${social.linkedIn}`}>
          LinkedIn
        </a>
      </footer>
    </div>
  )
}

export default Layout
