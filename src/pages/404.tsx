import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layout'
import { Head } from '../components/head'

type NotFoundPageProps = {
  data: any
  location: Location
}

class NotFoundPage extends React.Component<NotFoundPageProps> {
  render() {
    const { data } = this.props
    const { pathPrefix } = data
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout
        pathPrefix={pathPrefix}
        location={this.props.location}
        title={siteTitle}
      >
        <Head title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      pathPrefix
      siteMetadata {
        title
      }
    }
  }
`
