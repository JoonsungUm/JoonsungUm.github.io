import React, { useState, useEffect } from 'react'
import Switch from 'react-switch'

import * as Dom from '../../utils/dom'
import { ThemeType } from '../../types'

import './index.scss'

function getTheme(checked: boolean) {
  return checked ? ThemeType.DARK : ThemeType.LIGHT
}

function toggleTheme(theme: ThemeType) {
  switch (theme) {
    case ThemeType.LIGHT: {
      Dom.addClassToBody(ThemeType.LIGHT)
      Dom.removeClassToBody(ThemeType.DARK)
      break
    }
    case ThemeType.DARK: {
      Dom.addClassToBody(ThemeType.DARK)
      Dom.removeClassToBody(ThemeType.LIGHT)
      break
    }
  }
}

export const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = (checked: boolean) => {
    const theme = getTheme(checked)

    setChecked(checked)
    toggleTheme(theme)
  }

  useEffect(() => {
    const checked = Dom.hasClassOfBody(ThemeType.DARK)

    handleChange(checked)
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
