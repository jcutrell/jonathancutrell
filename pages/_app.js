import 'normalize.css/normalize.css'
import '../styles/globals.css'
import Layout from '../layouts/Layout'
//import { StateProvider } from "../store.js";

function MainApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MainApp
