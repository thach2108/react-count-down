export type KeyframesType = {
  color?: string
  negative?: boolean
  timeLoss: number
  totalTime: number
  backgroundColor?: string
}

export type CounterViewStyleType = {
  width: number
  height: number
  backgroundColor: string
}

export type OverlayLayerStyleType = {
  negative?: boolean
  color: string
  timeLoss: number
  totalTime: number
  borderWidth: number
  backgroundColor: string
}

export type MainLayerStyleType = OverlayLayerStyleType

export type StaticLayerStyleType = Omit<
  OverlayLayerStyleType,
  'timeLoss' | 'totalTime'
>
