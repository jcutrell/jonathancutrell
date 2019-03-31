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
  bodyColor: '#262740',
  headerColor: '#262740',
  headerWeight: '400',
  headerLineHeight: 1.2,
  headerFontFamily: ['Playfair Display'],
  baseLineHeight: 1.925,
  googleFonts: [
    ...StAnnes.googleFonts,
    {
      name: 'Playfair Display',
      styles: ['400'],
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
