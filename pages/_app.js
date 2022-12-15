import React from 'react'
import SiteLayout from '../layouts/Layout'
import 'normalize.css/normalize.css'
import '../styles/globals.css'
//import { StateProvider } from "../store.js";
import { MDXProvider } from '@mdx-js/react'

function MainApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}

export default MainApp
