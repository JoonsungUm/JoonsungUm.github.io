import React, { useMemo } from 'react'

import { ThumbnailItem } from '../thumbnail-item'
import { DEFAULT_CATEGORY } from '../../constants'

type ContentsProps = {
  posts: any[]
  countOfInitialPost: any
  count: any
  category: any
}

export const Contents = ({
  posts,
  countOfInitialPost,
  count,
  category,
}: ContentsProps) => {
  const refinedPosts = useMemo(
    () =>
      posts
        .filter(({ node }: any) => {
          const postCategory = node.frontmatter.category
          return (
            category === DEFAULT_CATEGORY ||
            postCategory === category ||
            postCategory.split(', ').includes(category)
          )
        })
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
