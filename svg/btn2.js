import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg width={258} height={52} viewBox="0 0 258 52" fill="none" {...props}>
      <G filter="url(#prefix__filter0_d)">
        <Rect x={4} width={250} height={44} rx={22} fill="#fff" />
        <Rect x={4.5} y={0.5} width={249} height={43} rx={21.5} stroke="#000" />
      </G>
      <Path
        d="M106.967 16.825h-1.215v2.415c0 2.55-1.635 5.13-3.615 6.075l.75 1.005c1.575-.81 2.865-2.49 3.48-4.515.645 1.92 1.935 3.51 3.465 4.26l.735-.99c-1.995-.9-3.6-3.375-3.6-5.835v-2.415zm5.01-1.17V29.14h1.23V15.655h-1.23zm11.834 6.585c-1.98-.675-3.27-2.34-3.27-4.125v-.525h2.97v-.99h-7.215v.99h3.015v.54c0 1.92-1.35 3.66-3.375 4.365l.645.975c1.575-.585 2.79-1.77 3.36-3.27.585 1.38 1.74 2.475 3.24 3l.63-.96zm-6.135 3.24h7.53v3.645h1.23V24.49h-8.76v.99zm10.755-6.285h-1.995V15.67h-1.23v8.1h1.23v-3.555h1.995v-1.02zm5.309 5.895c-1.215 0-2.1-.87-2.1-2.07 0-1.215.885-2.085 2.1-2.085 1.23 0 2.115.87 2.115 2.085 0 1.2-.885 2.07-2.115 2.07zm0-5.175c-1.89 0-3.255 1.29-3.255 3.105 0 1.83 1.365 3.09 3.255 3.09 1.92 0 3.285-1.26 3.285-3.09 0-1.815-1.365-3.105-3.285-3.105zm.6-4.095h-1.23v1.995h-3.39v.99h7.935v-.99h-3.315V15.82zm8.025 5.37h-2.205v-5.52h-1.23v13.44h1.23v-6.885h2.205V21.19zm2.024-4.08v.99h5.055c-.255 3.195-2.055 5.775-5.67 7.5l.66 1.005c4.47-2.19 6.255-5.61 6.255-9.495h-6.3zm9.015-1.455V29.11h1.23V15.655h-1.23z"
        fill="#000"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default SvgComponent
