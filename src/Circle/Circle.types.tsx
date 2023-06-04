export type KeyframesType = {
  color?: string
  negative?: boolean
  timeLoss: number
  totalTime: number
}

export type CounterViewStyleType = {
  width: number
  height: number
}

export type OverlayLayerStyleType = {
  negative?: boolean
  color: string
  timeLoss: number
  totalTime: number
  borderWidth: number
}

export type MainLayerStyleType = OverlayLayerStyleType

export type StaticLayerStyleType = Omit<
  OverlayLayerStyleType,
  'timeLoss' | 'totalTime'
>
