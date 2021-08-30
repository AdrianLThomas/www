/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <div>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="https://avatars.githubusercontent.com/u/8332893?v=4"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
        <p>
          {data.site.siteMetadata.description}
        </p>
    </div>
  )
}

export default Bio
