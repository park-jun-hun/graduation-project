import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={26} height={18} viewBox="0 0 26 18" fill="none" {...props}>
      <Path
        d="M0 .9A.9.9 0 01.9 0h23.4a.9.9 0 110 1.8H.9A.9.9 0 010 .9zM0 17.1a.9.9 0 01.9-.9h14.4a.9.9 0 110 1.8H.9a.9.9 0 01-.9-.9zM0 9a.9.9 0 01.9-.9h23.4a.9.9 0 110 1.8H.9A.9.9 0 010 9z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
