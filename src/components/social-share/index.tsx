import React, { FormEvent } from 'react'
import { FacebookIcon } from './facebook-icon'
import { TwitterIcon } from './twitter-icon'
import { shareToTwitter, shareToFacebook } from '../../utils/share'

import './index.scss'

type SocialShareProps = {
  title: string
  author: string
}

export const SocialShare = ({ title, author }: SocialShareProps) => {
  const onClickTwitterIcon = (e: FormEvent) => {
    e.preventDefault()

    return shareToTwitter(
      window.location.href,
      `Recommend on "${title}" written by @${author}`,
    )
  }

  const onClickFacebookIcon = (e: FormEvent) => {
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
