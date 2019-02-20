import { EnumLiteralsOf } from '../types'

export type Themes = EnumLiteralsOf<typeof Themes>
export const Themes = Object.freeze({
  DARK: 'dark' as 'dark',
  LIGHT: 'light' as 'dark',
})
