import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div>
      <p>
        Written by <strong>{author.name}</strong> {author.summary}
        
      </p>
    </div>
  )
}

export default Bio
