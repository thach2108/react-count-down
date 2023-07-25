import React, { useState } from 'react'
import Couter from '../components/Counter'
import { EAnimationType } from '../components/Counter/Counter.types'
import { ANIMATION_TIME, BG_COLOR, COLOR } from '../utils/configs'
import { LineStyle, MainLayerStyle } from './Line.styles'
import { EDirectionType } from './Line.types'

export type LinePropsType = {
  color?: string
  width?: number
  height?: number
  negative?: boolean
  borderColor?: string
  backgroundColor?: string
  gradientBgColors?: string[]
  direction?: EDirectionType
  currentTime?: number
  totalTime?: number
  ready?: boolean
  onRefresh?: () => void
  renderText?: (val: number) => React.ReactNode | string
}

const Line = ({
  negative,
  width = 200,
  height = 20,
  ready = true,
  color = BG_COLOR,
  borderColor = COLOR,
  gradientBgColors = [],
  backgroundColor = COLOR,
  totalTime = ANIMATION_TIME,
  currentTime = ANIMATION_TIME,
  direction = EDirectionType.HORIZONTAL,
  renderText,
  onRefresh = () => {}
}: LinePropsType) => {
  const [current, setCurrentTime] = useState(currentTime)

  const handleRefresh = () => {
    setCurrentTime(totalTime)
    onRefresh()
  }

  return (
    <LineStyle
      width={width}
      height={height}
      className='line-count-down'
      borderColor={borderColor}
    >
      <React.Fragment>
        <MainLayerStyle
          ready={ready}
          negative={negative}
          totalTime={totalTime}
          direction={direction}
          currentTime={current}
          backgroundColor={backgroundColor}
          gradientBgColors={gradientBgColors}
        />
        <Couter
          ready={ready}
          color={color}
          totalTime={totalTime}
          currentTime={currentTime}
          animationType={EAnimationType.LINE}
          renderText={renderText}
          onRefresh={handleRefresh}
        />
      </React.Fragment>
    </LineStyle>
  )
}

export default Line
