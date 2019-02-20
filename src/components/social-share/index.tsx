import React from 'react'
import { FacebookIcon } from './facebook-icon'
import { TwitterIcon } from './twitter-icon'
import { shareToTwitter, shareToFacebook } from '../../utils/share'

import './index.scss'

interface SocialShareProps {
  title: string
  author: string
}

export const SocialShare: React.FC<SocialShareProps> = ({ title, author }) => {
  const onClickTwitterIcon = (e: any) => {
    e.preventDefault()

    return shareToTwitter(
      window.location.href,
      `Recommend on "${title}" written by @${author}`,
    )
  }

  const onClickFacebookIcon = (e: any) => {
    e.preventDefault()
    return shareToFacebook(window.location.href)
  }

  return (
    <div className="social-share">
      <FacebookIcon onClick={onClickFacebookIcon} />
      <TwitterIcon onClick={onClickTwitterIcon} />
    </div>
  )
}
