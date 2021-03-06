import React from 'react'

import { Top } from '../components/top'
import { Header } from '../components/header'
import { ThemeSwitch } from '../components/theme-switch'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'

import './index.scss'

type LayoutProps = {
  pathPrefix: string
  location: any
  title: string
  children: import('react').ReactNode
}

export const Layout = ({
  pathPrefix = `/`,
  location,
  title,
  children,
}: LayoutProps) => (
  <>
    <Top title={title} location={location} rootPath={pathPrefix} />
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <ThemeSwitch />
      <Header title={title} location={location} rootPath={pathPrefix} />
      {children}
      <Footer />
    </div>
  </>
)
