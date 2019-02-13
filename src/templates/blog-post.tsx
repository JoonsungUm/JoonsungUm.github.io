import React from 'react'
import { graphql } from 'gatsby'

import * as Elements from '../components/elements'
import { Layout } from '../layout'
import { Head } from '../components/head'
import { PostTitle } from '../components/post-title'
import { PostContainer } from '../components/post-container'
// import { SocialShare } from '../components/social-share'
import { SponsorButton } from '../components/sponsor-button'
import { Bio } from '../components/bio'
import { PostNavigator } from '../components/post-navigator'
import { Disqus } from '../components/disqus'
import { Utterences } from '../components/utterances'

import '../styles/code.scss'

interface BlogPostProps {
  data: any
  pageContext: any
  location: any
}

const BlogPost: React.FC<BlogPostProps> = ({ data, pageContext, location }) => {
  const { pathPrefix } = data
  const post = data.markdownRemark
  const metaData = data.site.siteMetadata
  // const { title, comment, siteUrl, author, sponsor } = metaData
  const { title, comment, siteUrl, sponsor } = metaData
  const { disqusShortName, utterances } = comment

  return (
    <Layout pathPrefix={pathPrefix} location={location} title={title}>
      <Head title={post.frontmatter.title} description={post.excerpt} />
      <PostTitle title={post.frontmatter.title} />
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default BlogPost
