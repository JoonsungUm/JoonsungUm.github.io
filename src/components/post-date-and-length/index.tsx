import React from 'react'
import { FormattedRelative } from 'react-intl'

type PostDateAndLengthProps = {
  date: string
  length: number
}

export const PostDateAndLength = ({ date, length }: PostDateAndLengthProps) => (
  <p>
    <FormattedRelative value={date} /> &middot; {length} min read
  </p>
)
