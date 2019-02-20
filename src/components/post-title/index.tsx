import React from 'react'

type PostTitleProps = {
  title: string
}

export const PostTitle = ({ title }: PostTitleProps) => <h1>{title}</h1>
