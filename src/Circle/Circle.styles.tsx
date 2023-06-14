import styled, { keyframes } from 'styled-components'
import { BG_COLOR } from '../utils/configs'
import {
  CounterViewStyleType as CircleStyleType,
  KeyframesType,
  MainLayerStyleType,
  OverlayLayerStyleType,
  StaticLayerStyleType
} from './Circle.types'

const borderMainKeyframe = ({
  color,
  negative,
  timeLoss,
  totalTime
}: KeyframesType) => {
  const getBR = (percent: number) => {
    let bool = !(timeLoss / totalTime >= percent)
    if (negative) bool = !bool
    return `border-right-color: ${bool ? color : 'transparent'};`
  }
  const getBB = (percent: number) => {
    let bool = !(timeLoss / totalTime >= percent)
    if (negative) bool = !bool
    return `border-bottom-color: ${bool ? color : 'transparent'};`
  }
  const getBL = (percent: number) => {
    let bool = !(timeLoss / totalTime >= percent)
    if (negative) bool = !bool
    return `border-left-color: ${bool ? color : 'transparent'};`
  }
  const br = (
    ((totalTime / 4 - timeLoss) * 100) /
    (totalTime - timeLoss)
  ).toFixed(2)
  const bb = (
    ((totalTime / 2 - timeLoss) * 100) /
    (totalTime - timeLoss)
  ).toFixed(2)
  const bl = (
    (((totalTime * 3) / 4 - timeLoss) * 100) /
    (totalTime - timeLoss)
  ).toFixed(2)

  return keyframes`
  0% {
    ${getBR(0.25)}
    ${getBB(0.5)}
    ${getBL(0.75)}
  }
  ${Number(br) - 0.01 + '%'} {
    border-right-color:  ${negative ? 'transparent' : color};
  }
  ${br + '%'} {
    border-right-color: ${negative ? color : 'transparent'};
  }
  ${Number(bb) - 0.01 + '%'} {
    border-bottom-color:${negative ? 'transparent' : color};
  }
  ${bb + '%'} {
    border-bottom-color: ${negative ? color : 'transparent'};
  }
  ${Number(bl) - 0.01 + '%'} {
    border-left-color:${negative ? 'transparent' : color};
  }
  ${bl + '%'} {
    border-left-color: ${negative ? color : 'transparent'};
  }
  100% {
    border-right-color: ${negative ? color : 'transparent'};
    border-bottom-color: ${negative ? color : 'transparent'};
    border-left-color: ${negative ? color : 'transparent'}
  }
  `
}

const rotateMainKeyframe = ({
  timeLoss,
  totalTime
}: KeyframesType) => keyframes`
0% {
  transform: rotate(${(360 * timeLoss) / totalTime}deg);
}
100% {
  transform: rotate(360deg);
}
`

const overlayKeyframe = ({
  color,
  negative,
  timeLoss,
  totalTime,
  backgroundColor
}: KeyframesType) => {
  const milestones = (totalTime * 3) / 4 - timeLoss
  const bt = (
    ((milestones > 0 ? milestones : 0) * 100) /
    (totalTime - timeLoss)
  ).toFixed(2)
  return keyframes`
  0% {
    border-top-color: ${negative ? backgroundColor : color};
  }
  ${Number(bt) - 0.01 + '%'} {
    border-top-color: ${negative ? backgroundColor : color};
  }
  ${bt + '%'} {
    border-top-color: transparent;
  }
  99.99%{
    border-top-color: transparent;
  }
  100% {
    border-top-color: ${negative ? backgroundColor : color};
  }
  `
}

export const CircleStyle = styled('div')<CircleStyleType>(
  ({ width = 40, height = 40, backgroundColor = BG_COLOR }) => ({
    width,
    height,
    backgroundColor,
    display: 'flex',
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    transform: `rotate(-45deg)`
  })
)

export const OverlayLayerStyle = styled.div<OverlayLayerStyleType>`
  position: absolute;
  inset: ${(p) => (p.negative ? -1 : 0)}px;
  border-radius: 100%;
  border: ${(p) => p.borderWidth + (p.negative ? 2 : 0)}px solid transparent;
  animation-name: ${(p) =>
    overlayKeyframe({
      color: p.color,
      negative: p.negative,
      timeLoss: p.timeLoss,
      totalTime: p.totalTime,
      backgroundColor: p.backgroundColor
    })};
  animation-duration: ${(p) => p.totalTime - p.timeLoss}s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: transparent;
`

export const MainLayerStyle = styled.div<MainLayerStyleType>`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 100%;
  &::before,
  &::after {
    content: '';
    border-radius: 100%;
    position: absolute;
    animation-duration: ${(p) => p.totalTime - p.timeLoss}s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  &::before {
    inset: 0;
    border: ${(p) => p.borderWidth}px solid
      ${(p) => (p.negative ? 'transparent' : p.color)};
    animation-name: ${(p) =>
      borderMainKeyframe({
        color: p.color,
        negative: p.negative,
        timeLoss: p.timeLoss,
        totalTime: p.totalTime
      })};
  }
  &::after {
    inset: ${(p) => (p.negative ? 0 : -1)}px;
    border: ${(p) => p.borderWidth + (p.negative ? 0 : 2)}px solid transparent;
    border-top-color: ${(p) => (p.negative ? p.color : p.backgroundColor)};
    animation-name: ${(p) =>
      rotateMainKeyframe({
        timeLoss: p.timeLoss,
        totalTime: p.totalTime
      })};
  }
  background-color: transparent;
`

export const StaticLayerStyle = styled.div<StaticLayerStyleType>`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 100%;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  border: ${(p) => p.borderWidth}px solid ${(p) => p.color};
  background-color: ${(p) => p.backgroundColor};
`
