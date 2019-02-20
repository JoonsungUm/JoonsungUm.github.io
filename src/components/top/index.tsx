import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'

type TopProps = {
  title: string
  location: Location
  rootPath: string
}

export const Top = ({ title, location, rootPath }: TopProps) => {
  const isRoot = location.pathname === rootPath
  return (
    <div className="top">
      {!isRoot && (
        <Link to={`/`} className="link">
          {title}
        </Link>
      )}
      <GitHubIcon />
    </div>
  )
}
