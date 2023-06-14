import React, { useEffect, useRef } from 'react'
import { ViewerStyle } from './Counter.styles'
import { EAnimationType } from './Counter.types'

export type CouterPropsType = {
  color: string
  totalTime: number
  currentTime: number
  animationType: EAnimationType
  onRefresh: () => void
}

const Couter = ({
  color,
  totalTime,
  currentTime,
  animationType,
  onRefresh
}: CouterPropsType) => {
  const viewer = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!viewer.current) return

      viewer.current.innerHTML = `${Number(viewer.current.innerHTML) - 1}`
      if (viewer.current.innerHTML === '0') {
        viewer.current.innerHTML = `${totalTime}`
        onRefresh()
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ViewerStyle
      ref={viewer}
      color={color}
      animationType={animationType}
      className='count-down__viewer'
    >
      {currentTime}
    </ViewerStyle>
  )
}

export default Couter
