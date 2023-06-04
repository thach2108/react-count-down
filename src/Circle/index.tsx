import React, { useState } from 'react'
import { ANIMATION_TIME, COLOR } from '../utils/configs'
import {
  CircleStyle,
  MainLayerStyle,
  OverlayLayerStyle,
  StaticLayerStyle,
  ViewerStyle
} from './Circle.styles'
import Couter from './Counter'

export type CirclePropsType = {
  color?: string
  index?: number
  width?: number
  height?: number
  negative?: boolean
  className?: string
  borderWidth?: number
  currentTime?: number
  totalTime?: number
  ready?: boolean
  onRefresh?: () => void
}

const Circle = ({
  negative,
  width = 40,
  height = 40,
  ready = true,
  color = COLOR,
  borderWidth = 3,
  totalTime = ANIMATION_TIME,
  currentTime = ANIMATION_TIME,
  onRefresh = () => {}
}: CirclePropsType) => {
  const [timeLoss, setTimeLoss] = useState(totalTime - currentTime)

  const handleRefresh = () => {
    setTimeLoss(0)
    onRefresh()
  }

  return (
    <CircleStyle width={width} height={height} className='circle-count-down'>
      {ready ? (
        <React.Fragment>
          <Couter
            currentTime={currentTime}
            totalTime={totalTime}
            onRefresh={handleRefresh}
          />
          <MainLayerStyle
            color={color}
            negative={negative}
            timeLoss={timeLoss}
            borderWidth={borderWidth}
            totalTime={totalTime}
          />
          <OverlayLayerStyle
            color={color}
            negative={negative}
            timeLoss={timeLoss}
            borderWidth={borderWidth}
            totalTime={totalTime}
          ></OverlayLayerStyle>
        </React.Fragment>
      ) : (
        <StaticLayerStyle color={color} borderWidth={borderWidth}>
          <ViewerStyle className='circle-count-down__viewer'>
            {totalTime}
          </ViewerStyle>
        </StaticLayerStyle>
      )}
    </CircleStyle>
  )
}

export default Circle
