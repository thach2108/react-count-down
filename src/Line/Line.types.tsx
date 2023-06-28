export type KeyframesType = {
  totalTime: number
  negative?: boolean
  gradients: string[]
  currentTime: number
  direction: EDirectionType
}

export type CounterViewStyleType = {
  width: number
  height: number
  borderColor: string
}

export type MainLayerStyleType = {
  totalTime: number
  negative?: boolean
  currentTime: number
  backgroundColor: string
  direction: EDirectionType
  gradientBgColors: string[]
}

export enum EDirectionType {
  HORIZONTAL,
  VERTICAL
}
