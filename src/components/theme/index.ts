import { AlertTheme } from 'components/Alert/types'
import { ModalTheme } from 'components/Modal/types'
import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices } from './types'

export interface MainTheme {
  siteWidth: number
  isDark: boolean
  alert: AlertTheme
  colors: Colors
  modal: ModalTheme
  breakpoints: Breakpoints
  mediaQueries: MediaQueries
  spacing: Spacing
  shadows: Shadows
  radii: Radii
  zIndices: ZIndices
}

export { default as dark } from './dark'
export { default as light } from './light'

export { lightColors } from './colors'
export { darkColors } from './colors'
