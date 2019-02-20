import React, { Component } from 'react'
import ReactDisqusComments from 'react-disqus-comments'

type DisqusProps = {
  post: any
  shortName: any
  siteUrl: any
  slug: any
}

type Toast = {
  text: string
}

type DisqusState = {
  toasts: Toast[]
}

const initialState = Object.freeze({
  toasts: [],
})

export class Disqus extends Component<DisqusProps, DisqusState> {
  static readonly state = initialState

  onSnackbarDismiss = () => {
    const [, ...toasts] = this.state.toasts
    this.setState({ toasts })
  }

  notifyAboutComment = () => {
    const toasts = this.state.toasts.slice()
    toasts.push({ text: 'New comment available!!' })
    this.setState({ toasts })
  }

  render() {
    const { post, shortName, siteUrl, slug } = this.props
    const url = siteUrl + slug

    return (
      <ReactDisqusComments
        shortname={shortName}
        identifier={post.frontmatter.title}
        title={post.frontmatter.title}
        url={url}
        category_id={post.frontmatter.category_id}
        onNewComment={this.notifyAboutComment}
      />
    )
  }
}
