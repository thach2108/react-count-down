import React, { useEffect, useRef, useState } from 'react'
import { ViewerStyle } from './Counter.styles'
import { EAnimationType } from './Counter.types'

export type CouterPropsType = {
  color: string
  ready?: boolean
  totalTime: number
  currentTime: number
  animationType: EAnimationType
  renderText?: (val: number) => React.ReactNode | string
  onRefresh: () => void
}

const Couter = ({
  color,
  ready,
  totalTime,
  currentTime,
  animationType,
  onRefresh,
  renderText = (val) => `${val}`
}: CouterPropsType) => {
  const viewer = useRef<HTMLSpanElement | null>(null)
  const [counter, setCounter] = useState<number>(currentTime)

  useEffect(() => {
    if (!ready) return

    const interval = setInterval(() => {
      if (!viewer.current) return

      viewer.current.innerHTML = `${Number(viewer.current.innerHTML) - 1}`
      if (viewer.current.innerHTML === '0') {
        viewer.current.innerHTML = `${totalTime}`
        setCounter(Number(viewer.current.innerHTML))
        onRefresh()
        return
      }
      setCounter(Number(viewer.current.innerHTML))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ViewerStyle
      color={color}
      animationType={animationType}
      className='count-down__viewer'
    >
      <span ref={viewer} style={{ display: 'none' }}>
        {currentTime}
      </span>
      {renderText(counter)}
    </ViewerStyle>
  )
}

export default Couter
