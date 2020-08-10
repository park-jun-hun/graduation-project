import * as React from "react"
import Svg, { Path, Rect, G } from "react-native-svg"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg height={512} viewBox="0 0 512 512" width={512} {...props}>
      <Path d="M120 304v160H88l-32-16V320l32-16z" fill="#3397e8" />
      <Path
        d="M96 272v192h-8l-8-4V272a8 8 0 0116 0zM56 336v96a32 32 0 01-32-32v-32a32 32 0 0132-32z"
        fill="#2978b8"
      />
      <Path d="M456 320v128l-32 16h-32V304h32z" fill="#3397e8" />
      <Path d="M432 272v188l-8 4h-8V272a8 8 0 0116 0z" fill="#2978b8" />
      <Path
        d="M96 256v48h-8l-8 4v-52zM432 256v52l-8-4h-8v-48z"
        fill="#6a7073"
      />
      <Path
        d="M456 432v-96a32 32 0 0132 32v32a32 32 0 01-32 32z"
        fill="#2978b8"
      />
      <Path
        d="M64 240v16a16 16 0 0016 16h16a16 16 0 0016-16v-16A144 144 0 01256 96a144 144 0 01144 144v16a16 16 0 0016 16h16a16 16 0 0016-16v-16c0-106.039-85.961-192-192-192S64 133.961 64 240z"
        fill="#3397e8"
      />
      <Path
        d="M112.88 224a145.827 145.827 0 00-.88 16v16a16 16 0 01-16 16H80a16 16 0 01-16-16v-16q0-8.085.66-16zM448 240v16a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a145.691 145.691 0 00-.88-16h48.22q.66 7.92.66 16z"
        fill="#266fab"
      />
      <Path
        d="M362 142.54l-12.8 13.28a15.967 15.967 0 01-22.38.89C307.67 139.29 282.96 128 256 128s-51.67 11.29-70.82 28.71a15.967 15.967 0 01-22.38-.89l-12.7-13.39a143.985 143.985 0 01207.72-4.25c1.42 1.42 2.82 2.88 4.18 4.36z"
        fill="#2978b8"
      />
      <Rect fill="#7e8589" height={160} rx={16} width={48} x={120} y={304} />
      <G fill="#6a7073">
        <Path d="M144 336a8 8 0 01-8 8h-16v-16h16a8 8 0 018 8zM144 368a8 8 0 01-8 8h-16v-16h16a8 8 0 018 8zM144 400a8 8 0 01-8 8h-16v-16h16a8 8 0 018 8zM144 432a8 8 0 01-8 8h-16v-16h16a8 8 0 018 8z" />
      </G>
      <Rect fill="#7e8589" height={160} rx={16} width={48} x={344} y={304} />
      <Path
        d="M392 424v16h-16a8 8 0 010-16zM392 392v16h-16a8 8 0 010-16zM392 360v16h-16a8 8 0 010-16zM392 328v16h-16a8 8 0 010-16z"
        fill="#6a7073"
      />
      <Path d="M312 256l-80 48v-96z" fill="#f7b030" />
    </Svg>
  )
}

<<<<<<< Updated upstream
export default SvgComponent
=======
export default SvgComponent
>>>>>>> Stashed changes
