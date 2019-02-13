import React from 'react'

export const PostContainer = ({ html }: any) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
)
