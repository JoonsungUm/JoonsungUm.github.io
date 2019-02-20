import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

type HeaderProps = {
  title: string
  location: Location
  rootPath: string
}

export const Header = ({ title, location, rootPath }: HeaderProps) => {
  const isRoot = location.pathname === rootPath

  return isRoot ? (
    <h1 className="home-header">
      <Link to={`/`} className="link">
        {title}
      </Link>
    </h1>
  ) : (
    <></>
  )
}
