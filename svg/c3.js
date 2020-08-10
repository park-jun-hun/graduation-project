import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none" {...props}>
      <Circle cx={50} cy={50} r={50} fill="#FFFFF3" />
    </Svg>
  )
}

export default SvgComponent
