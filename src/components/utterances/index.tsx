import React, { useEffect, useRef, RefObject } from 'react'

const src = 'https://utteranc.es/client.js'
const branch = 'source'

interface UtterencesProps {
  repo: string
}

interface UtterancesConfig {
  src: string
  repo: string
  branch: string
  async: string
  'issue-term': string
  crossorigin: string
  [key: string]: string
}

export const Utterences: React.FC<UtterencesProps> = ({ repo }) => {
  const rootElm: RefObject<any> = useRef(null)

  useEffect(() => {
    const utterances = document.createElement('script')
    const utterancesConfig: UtterancesConfig = {
      src,
      repo,
      branch,
      async: 'true',
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    }

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })
    rootElm!.current!.appendChild(utterances)
  }, [rootElm])

  return <div className="utterences" ref={rootElm} />
}
