import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={75} height={75} viewBox="0 0 75 75" fill="none" {...props}>
      <Path d="M0 0h75v75H0V0z" fill="url(#prefix__pattern0)" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#prefix__image0" transform="scale(.00195)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
