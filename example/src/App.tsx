import React from 'react'

import { Circle } from 'react-count-down'

const App = () => {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '2rem auto'
      }}
    >
      <div className='record'>
        <div className='record__head'>
          <Circle />
          <h4>Positive</h4>
        </div>
        <code>{'<Circle />'}</code>
      </div>
      <div className='record'>
        <div className='record__head'>
          <Circle negative />
          <h4>Negative</h4>
        </div>
        <code>{'<Circle negative />'}</code>
      </div>
      <div className='record'>
        <div className='record__head'>
          <Circle ready={false} />
          <h4>Waiting for a promise or an observable</h4>
        </div>
        <code>{'<Circle ready={false} />'}</code>
      </div>
      <div className='record'>
        <div className='record__head'>
          <Circle currentTime={42} />
          <h4>The current time is between 0 and total</h4>
        </div>
        <code>{'<Circle currentTime={42} />'}</code>
      </div>
      <div className='record'>
        <div className='record__head custom'>
          <Circle borderWidth={5} color='red' width={50} height={50} />
          <h4>Custom the circle's style </h4>
        </div>
        <code>
          {'<Circle borderWidth={5} color="red" width={50} height={50} />'}
        </code>
        <div style={{ margin: '1rem 0 5px 1rem' }}>
          or <b>Custom text color</b>
        </div>
        <code>
          .circle-count-down__viewer:
          {`{
            color: green;
          }`}
        </code>
      </div>
    </div>
  )
}

export default App
