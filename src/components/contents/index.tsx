import React, { useMemo } from 'react'

import { ThumbnailItem } from '../thumbnail-item'
import { DEFAULT_CATEGORY } from '../../constants'

interface ContentsProps {
  posts: any[]
  countOfInitialPost: any
  count: any
  category: any
}

export const Contents: React.FC<ContentsProps> = ({
  posts,
  countOfInitialPost,
  count,
  category,
}) => {
  const refinedPosts = useMemo(
    () =>
      posts
        .filter(
          ({ node }: any) =>
            category === DEFAULT_CATEGORY ||
            node.frontmatter.category === category,
        )
        .slice(0, count * countOfInitialPost),
    [category],
  )

  return (
    <>
      {refinedPosts.map(({ node }, index) => (
        <ThumbnailItem node={node} key={`item_${index}`} />
      ))}
    </>
  )
}
