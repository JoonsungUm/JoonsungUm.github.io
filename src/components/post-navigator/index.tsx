import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

type PostNavigatorProps = {
  pageContext: any
}

export const PostNavigator = ({ pageContext }: PostNavigatorProps) => {
  const { previous, next } = pageContext

  return (
    <ul className="navigator">
      <li>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </li>
    </ul>
  )
}
