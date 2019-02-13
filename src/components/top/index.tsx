import React from 'react'
import { Link } from 'gatsby'
// import { GitHubIcon } from '../social-share/github-icon'
import { rhythm } from '../../utils/typography'
import { ThemeSwitch } from '../theme-switch'

import './index.scss'

interface TopProps {
  title: string
  location: Location
  rootPath: string
}

export const Top: React.FC<TopProps> = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <div
      className="top"
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
      }}
    >
      {!isRoot && (
        <Link to={`/`} className="link">
          {title}
        </Link>
      )}
      {/* <GitHubIcon /> */}
      <ThemeSwitch />
    </div>
  )
}
