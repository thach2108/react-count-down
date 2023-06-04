import React, { useEffect, useRef } from 'react'
import { setInterval } from 'timers'
import { ViewerStyle } from './Circle.styles'

export type CouterPropsType = {
  currentTime: number
  totalTime: number
  onRefresh: () => void
}

const Couter = ({ totalTime, currentTime, onRefresh }: CouterPropsType) => {
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
    <ViewerStyle ref={viewer} className='circle-count-down__viewer'>
      {currentTime}
    </ViewerStyle>
  )
}

export default Couter
