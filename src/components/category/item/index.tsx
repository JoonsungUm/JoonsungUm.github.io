import React from 'react'

interface ItemProps {
  title: string
  category: any
  selectCategory: any
}

export const Item: React.FC<ItemProps> = ({
  title,
  category,
  selectCategory,
}) => (
  <li
    className="item"
    role="tab"
    aria-selected={category === title ? 'true' : 'false'}
  >
    <div onClick={() => selectCategory(title)}>{title}</div>
  </li>
)
