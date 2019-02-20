import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'
import { PostDateAndLength } from '../post-date-and-length'

import './index.scss'

interface ThumbnailItemProps {
  node: any
}

export const ThumbnailItem: React.FC<ThumbnailItemProps> = ({ node }: any) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <h3>{node.frontmatter.title || node.fields.slug}</h3>
      <PostDateAndLength
        date={node.frontmatter.date}
        length={node.timeToRead}
      />
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  </Link>
)
