import React, { useState, useEffect } from 'react'
import Switch from 'react-switch'

import * as Dom from '../../utils/dom'
import { Themes } from '../../constants'

import './index.scss'

function getTheme(theme: boolean) {
  return theme ? Themes.DARK : Themes.LIGHT
}

function toggleTheme(theme: Themes) {
  switch (theme) {
    case Themes.LIGHT: {
      Dom.addClassToBody(Themes.LIGHT)
      Dom.removeClassToBody(Themes.DARK)
      break
    }
    case Themes.DARK: {
      Dom.addClassToBody(Themes.DARK)
      Dom.removeClassToBody(Themes.LIGHT)
      break
    }
  }
}

export const ThemeSwitch: React.FC = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = (changed: boolean) => {
    const theme = getTheme(changed)

    setChecked(changed)
    toggleTheme(theme)
  }

  useEffect(() => {
    const checkTheme = Dom.hasClassOfBody(Themes.DARK)

    handleChange(checkTheme)
  }, [])

  return (
    <div className="switch-container">
      <label htmlFor="normal-switch">
        <Switch
          onChange={handleChange}
          checked={checked}
          id="normal-switch"
          height={24}
          width={48}
          checkedIcon={<div className="icon checkedIcon">D</div>}
          uncheckedIcon={<div className="icon uncheckedIcon">L</div>}
          offColor={'#d9dfe2'}
          offHandleColor={'#fff'}
          onColor={'#999'}
          onHandleColor={'#282c35'}
        />
      </label>
    </div>
  )
}
