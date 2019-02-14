import React from 'react'
import { FormattedRelative } from 'react-intl'

interface PostDateAndLengthProps {
  date: string
  length: number
}

export const PostDateAndLength: React.FC<PostDateAndLengthProps> = ({ date, length }) => (
  <p><FormattedRelative value={date} /> &middot; {length} min read</p>
)
