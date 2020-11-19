// custom typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import Prism from "prism-react-renderer/prism";
(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-docker");

import { wrapRootElement as wrap } from './wrap-root-element'

export const wrapRootElement = wrap
