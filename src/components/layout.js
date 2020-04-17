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
    <div className="container-md mx-auto px-4 py-3 flex-1 justify-between">
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
