import Typography from 'typography'
import StAnnes from 'typography-theme-st-annes'

StAnnes.overrideThemeStyles = ({ rhythm }) => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    a: {
      color: '#533187',
    },
    'a:hover': {
      color: '#c86dd7',
    },
    blockquote: {
      borderColor: 'rgb(229, 236, 247)',
    },
    p: {
      lineHeight: 1.6,
    },
    h5: {
      textTransform: 'uppercase',
      fontSize: '.8rem',
    },
    h1: {
      fontSize: rhythm(1.4)
    },
    h2: {
      fontSize: rhythm(1.2)
    },
    h3: {
      fontSize: rhythm(1)
    },
    h4: {
      fontSize: rhythm(.8)
    },
    h5: {
      fontSize: rhythm(.6)
    },
    'h1,h2,h3,h4,h6': {
      fontWeight: 200
    }
  }
}

StAnnes.baseFontSize = '20px'

const typography = new Typography({
  ...StAnnes,
  bodyFontFamily: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
  bodyColor: '#262740',
  headerColor: '#262740',
  baseFontSize: '16px',
  headerLineHeight: 1.2,
  headerFontFamily: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
  baseLineHeight: 1.95,
  googleFonts: [
  ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
