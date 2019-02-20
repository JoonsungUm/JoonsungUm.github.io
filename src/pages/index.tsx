import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'
import { IntlProvider } from 'react-intl'

import { Layout } from '../layout'
import { Bio } from '../components/bio'
import { Head } from '../components/head'
import { Category } from '../components/category'
import { Contents } from '../components/contents'

import * as Storage from '../utils/storage'
import * as IOManager from '../utils/visible'

import { HOME_TITLE, DEFAULT_CATEGORY } from '../constants'

export default ({ data, location }: any) => {
  const initialCount = Storage.getCount(1)
  const initialCategory = Storage.getCategory(DEFAULT_CATEGORY)
  const [count] = useState(initialCount)
  const countRef = useRef(count)
  const [category, setCategory] = useState(initialCategory)

  const { pathPrefix, site } = data
  const { siteMetadata } = site
  const { countOfInitialPost } = siteMetadata.configs
  const posts = data.allMarkdownRemark.edges
  const categories = _.uniq<string>(
    posts.map(({ node }: any) => node.frontmatter.category),
  )

  useEffect(() => {
    IOManager.init()

    return () => {
      IOManager.destroy()
    }
  }, [])

  useEffect(() => {
    countRef.current = count
    IOManager.refreshObserver()
    Storage.setCount(count)
    Storage.setCategory(category)
  })

  const selectCategory = (categoryName: string) => {
    setCategory(categoryName)
  }

  return (
    <IntlProvider locale={siteMetadata.locale}>
      <Layout
        pathPrefix={pathPrefix}
        location={location}
        title={siteMetadata.title}
      >
        <Head title={HOME_TITLE} keywords={siteMetadata.keywords} />
        <Bio />
        <Category
          categories={categories}
          category={category}
          selectCategory={selectCategory}
        />
        <Contents
          posts={posts}
          countOfInitialPost={countOfInitialPost}
          count={count}
          category={category}
        />
      </Layout>
    </IntlProvider>
  )
}

export const pageQuery = graphql`
  query {
    site {
      pathPrefix
      siteMetadata {
        title
        locale
        configs {
          countOfInitialPost
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: null } } }
    ) {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
          }
        }
      }
    }
  }
`
