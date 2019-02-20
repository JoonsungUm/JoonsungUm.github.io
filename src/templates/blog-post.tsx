import React from 'react'
import { IntlProvider } from 'react-intl'
import { graphql } from 'gatsby'

import * as Elements from '../components/elements'
import { Layout } from '../layout'
import { Head } from '../components/head'
import { PostTitle } from '../components/post-title'
import { PostDateAndLength } from '../components/post-date-and-length'
import { PostContainer } from '../components/post-container'
// import { SocialShare } from '../components/social-share'
import { SponsorButton } from '../components/sponsor-button'
import { Bio } from '../components/bio'
import { PostNavigator } from '../components/post-navigator'
import { Disqus } from '../components/disqus'
import { Utterences } from '../components/utterances'

import '../styles/code.scss'

type BlogPostProps = {
  data: any
  pageContext: any
  location: Location
}

const BlogPost = ({ data, pageContext, location }: BlogPostProps) => {
  const { pathPrefix } = data
  const post = data.markdownRemark
  const metaData = data.site.siteMetadata
  const { title, comment, siteUrl, locale, sponsor } = metaData
  const { disqusShortName, utterances } = comment

  return (
    <IntlProvider locale={locale}>
      <Layout pathPrefix={pathPrefix} location={location} title={title}>
        <Head title={post.frontmatter.title} description={post.excerpt} />
        <PostTitle title={post.frontmatter.title} />
        <PostDateAndLength
          date={post.frontmatter.date}
          length={post.timeToRead}
        />
        <PostContainer html={post.html} />
        {/* <SocialShare title={post.frontmatter.title} author={author} /> */}
        {!!sponsor.buyMeACoffeeId && (
          <SponsorButton sponsorId={sponsor.buyMeACoffeeId} />
        )}
        <Elements.Hr />
        <Bio />
        <PostNavigator pageContext={pageContext} />
        {!!disqusShortName && (
          <Disqus
            post={post}
            shortName={disqusShortName}
            siteUrl={siteUrl}
            slug={pageContext.slug}
          />
        )}
        {!!utterances && <Utterences repo={utterances} />}
      </Layout>
    </IntlProvider>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      pathPrefix
      siteMetadata {
        title
        author
        siteUrl
        locale
        comment {
          disqusShortName
          utterances
        }
        sponsor {
          buyMeACoffeeId
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 280)
      html
      timeToRead
      frontmatter {
        title
        date
      }
    }
  }
`

export default BlogPost
