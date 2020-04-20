import React from "react"
import { Link } from "gatsby"
import {Helmet} from "react-helmet";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link to={`/`}>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link     
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    
    <div className="container pt-4 px-2 lg:mx-auto lg:pt-4">
     
     <Helmet>
     <meta name="viewport" content="width=device-width"/>
              
      </Helmet>
    
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
        {` blog.gnair.us`}
      </footer>
    </div>
  )
}

export default Layout
