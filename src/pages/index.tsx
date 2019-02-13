import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'

import { Layout } from '../layout'
import { Bio } from '../components/bio'
import { Head } from '../components/head'
import { Category } from '../components/category'
import { Contents } from '../components/contents'

import * as Storage from '../utils/storage'
import * as IOManager from '../utils/visible'

import { CategoryType } from '../types'
import { HOME_TITLE } from '../constants'

export default ({ data, location }: any) => {
  const initialCount = Storage.getCount(1)
  const initialCategory = Storage.getCategory(CategoryType.ALL)
  const [count] = useState(initialCount)
  const countRef = useRef(count)
  const [category, setCategory] = useState(initialCategory)

  const { pathPrefix, site } = data
  const { siteMetadata } = site
  const { countOfInitialPost } = siteMetadata.configs
  const posts = data.allMarkdownRemark.edges
  const categories = _.uniq<string>(posts.map(({ node }: any) => node.frontmatter.category))

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

  const selectCategory = (category: string) => {
    setCategory(category)
  }

  return (
    <Layout pathPrefix={pathPrefix} location={location} title={siteMetadata.title}>
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
  )
}

export const pageQuery = graphql`
  query {
    site {
      pathPrefix
      siteMetadata {
        title
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
