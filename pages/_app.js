import 'normalize.css/normalize.css'
import '../styles/globals.css'
//import { StateProvider } from "../store.js";

function MainApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}

export default MainApp
