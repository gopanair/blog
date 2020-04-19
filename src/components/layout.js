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
    
    <div className="flex items-center justify-center h-full">
     
    <div className="sm:w-0 md:w-1/6 lg:w-1/6 "></div>
    <div className="sm:w-full sm:ml-4 sm:mt-4 md:w-2/3 lg:w-2/3">
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
        {` blog.gnair.us`}
      </footer>
    </div>
    <div className="md:w-1/6 lg:w-1/6 sm:w-0"></div>
    </div>
  )
}

export default Layout
