import Typography from 'typography'
import StAnnes from 'typography-theme-st-annes'

StAnnes.overrideThemeStyles = ({ rhythm }) => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    a: {
      color: '#5BB9BC',
    },
    'a:hover': {
      color: '#E99444',
    },
  }
}

const typography = new Typography({
  ...StAnnes,
  bodyColor: '#262740',
  headerColor: '#262740',
  headerWeight: 400,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
