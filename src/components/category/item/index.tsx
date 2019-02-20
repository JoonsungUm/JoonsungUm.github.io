import React from 'react'

type ItemProps = {
  title: string
  category: any
  selectCategory: any
}

export const Item = ({ title, category, selectCategory }: ItemProps) => (
  <li
    className="item"
    role="tab"
    aria-selected={category === title ? 'true' : 'false'}
  >
    <div onClick={() => selectCategory(title)}>{title}</div>
  </li>
)
