import React, { useState } from 'react'
import Couter from '../components/Counter'
import { EAnimationType } from '../components/Counter/Counter.types'
import { ANIMATION_TIME, BG_COLOR, COLOR } from '../utils/configs'
import { CircleStyle, MainLayerStyle, OverlayLayerStyle } from './Circle.styles'

export type CirclePropsType = {
  color?: string
  width?: number
  height?: number
  negative?: boolean
  textColor?: string
  borderWidth?: number
  backgroundColor?: string
  currentTime?: number
  totalTime?: number
  ready?: boolean
  onRefresh?: () => void
  renderText?: (val: number) => string
}

const Circle = ({
  negative,
  width = 40,
  height = 40,
  ready = true,
  color = COLOR,
  borderWidth = 3,
  textColor = COLOR,
  backgroundColor = BG_COLOR,
  totalTime = ANIMATION_TIME,
  currentTime = ANIMATION_TIME,
  renderText,
  onRefresh = () => {}
}: CirclePropsType) => {
  const [timeLoss, setTimeLoss] = useState(totalTime - currentTime)

  const handleRefresh = () => {
    setTimeLoss(0)
    onRefresh()
  }

  return (
    <CircleStyle
      width={width}
      height={height}
      className='circle-count-down'
      backgroundColor={backgroundColor}
    >
      <React.Fragment>
        <Couter
          ready={ready}
          color={textColor}
          totalTime={totalTime}
          currentTime={currentTime}
          animationType={EAnimationType.CIRCLE}
          renderText={renderText}
          onRefresh={handleRefresh}
        />
        <MainLayerStyle
          ready={ready}
          color={color}
          negative={negative}
          timeLoss={timeLoss}
          borderWidth={borderWidth}
          totalTime={totalTime}
          backgroundColor={backgroundColor}
        />
        <OverlayLayerStyle
          color={color}
          negative={negative}
          timeLoss={timeLoss}
          borderWidth={borderWidth}
          totalTime={totalTime}
          backgroundColor={backgroundColor}
        ></OverlayLayerStyle>
      </React.Fragment>
    </CircleStyle>
  )
}

export default Circle
