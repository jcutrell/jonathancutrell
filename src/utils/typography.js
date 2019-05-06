import Typography from 'typography'
import StAnnes from 'typography-theme-st-annes'

StAnnes.overrideThemeStyles = ({ rhythm }) => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    a: {
      color: '#8FA8CB',
    },
    'a:hover': {
      color: '#E99444',
    },
    blockquote: {
      borderColor: 'rgb(229, 236, 247)',
    },
  }
}

StAnnes.baseFontSize = '20px'

const typography = new Typography({
  ...StAnnes,
  bodyFontFamily: ['Nunito Sans'],
  bodyColor: '#262740',
  headerColor: '#262740',
  headerWeight: '300',
  bodyWeight: '300',
  baseFontSize: '16px',
  headerLineHeight: 1.2,
  headerFontFamily: ['Nunito Sans'],
  baseLineHeight: 1.95,
  googleFonts: [
    {
      name: 'Nunito Sans',
      styles: ['300'],
    },
  ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
