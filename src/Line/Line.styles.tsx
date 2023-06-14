import styled, { keyframes } from 'styled-components'
import {
  EDirectionType,
  KeyframesType,
  CounterViewStyleType as LineStyleType,
  MainLayerStyleType
} from './Line.types'

const mainKeyframe = ({
  negative,
  currentTime,
  totalTime,
  direction
}: KeyframesType) => {
  return keyframes`
  0% {
    ${direction === EDirectionType.HORIZONTAL ? 'width' : 'height'}: ${
    negative ? 0 : (currentTime * 100) / totalTime
  }%;
  }
  100% {
    ${direction === EDirectionType.HORIZONTAL ? 'width' : 'height'}: ${
    negative ? (currentTime * 100) / totalTime : 0
  }%;
  }
  `
}

export const LineStyle = styled('div')<LineStyleType>(
  ({ width = 200, height = 20, borderColor }) => ({
    width,
    height,
    display: 'flex',
    overflow: 'hidden',
    borderRadius: height + 'px',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${borderColor}`
  })
)

export const MainLayerStyle = styled.div<MainLayerStyleType>`
  left: 0;
  bottom: 0;
  position: absolute;
  background-color: ${(p) => p.backgroundColor};
  animation-duration: ${(p) => p.currentTime}s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${(p) =>
    mainKeyframe({
      negative: p.negative,
      totalTime: p.totalTime,
      direction: p.direction,
      currentTime: p.currentTime
    })};
  ${(p) =>
    p.direction === EDirectionType.HORIZONTAL ? 'height' : 'width'}: 100%;
`

export const StaticLayerStyle = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${(p) => p.backgroundColor};
`
