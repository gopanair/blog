import React from "react"
import { Link } from "gatsby"

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
    <div className="flex flex-col pt-4 px-3 lg:px-64 lg:pt-10">
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
