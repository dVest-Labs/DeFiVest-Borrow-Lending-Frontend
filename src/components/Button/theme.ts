import { scales, variants } from './types'

export const scaleVariants = {
  [scales.MD]: {
    height: '48px',
    padding: '0 24px',
  },
  [scales.SM]: {
    height: '32px',
    padding: '0 16px',
  },
  [scales.XS]: {
    height: '20px',
    fontSize: '12px',
    padding: '0 8px',
  },
}

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: 'primary',
    color: 'white',
  },
  [variants.SECONDARY]: {
    backgroundColor: 'transparent',
    border: '2px solid',
    borderColor: 'primary',
    boxShadow: 'none',
    color: 'primary',
    ':disabled': {
      backgroundColor: 'transparent',
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: 'tertiary',
    boxShadow: 'none',
    color: 'primaryBright',
  },
  [variants.SUBTLE]: {
    backgroundColor: 'textSubtle',
    color: 'tertiary',
  },
  [variants.DANGER]: {
    backgroundColor: 'failure',
    color: 'white',
  },
  [variants.SUCCESS]: {
    backgroundColor: 'success',
    color: 'white',
  },
  [variants.TEXT]: {
    backgroundColor: 'transparent',
    color: 'primary',
    boxShadow: 'none',
  },
  [variants.BUBBLEGUM]: {
    background: 'linear-gradient(140.91deg, #3480F6d1 68.36%, #0DD8D0d1 84.22%)',
    color: 'white',
  },
  [variants.BUTTONGUM]: {
    background: 'linear-gradient(140.91deg, #0249BB 68.36%, #0DD8D1 84.22%)',
    color: 'white',
  },
  [variants.OPACITY]: {
    background: 'linear-gradient(137deg,#c5dcff8c 2.22%,#12f5ea59 98.22%)',
    color: 'teriary',
  },
} // #01255f
