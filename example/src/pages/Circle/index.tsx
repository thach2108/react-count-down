import React from 'react'
import { Circle } from 'react-count-down-animation'

const ExampleCircle = () => {
  return (
    <React.Fragment>
      <div className='mb-5'>
        <div className='mb-3 flex items-center gap-4'>
          <Circle backgroundColor='rgb(229, 231, 235)' />
          <h4 className='text-xl'>Positive</h4>
        </div>
        <code>
          <div>{`import { Circle } from 'react-count-down-animation'`}</div>
          <br />
          {`<Circle backgroundColor='rgb(229, 231, 235)'/>`}
        </code>
      </div>
      <div className='mb-5'>
        <div className='mb-3 flex items-center gap-4'>
          <Circle negative backgroundColor='rgb(229, 231, 235)' />
          <h4 className='text-xl'>Negative</h4>
        </div>
        <code>
          <div>{`import { Circle } from 'react-count-down-animation'`}</div>
          <br />
          {`<Circle negative backgroundColor='rgb(229, 231, 235)'/>`}
        </code>
      </div>
      <div className='mb-5'>
        <div className='mb-3 flex items-center gap-4 custom'>
          <Circle
            width={50}
            height={50}
            color='red'
            borderWidth={5}
            textColor='green'
            totalTime={40}
            currentTime={23}
            renderText={(val) => <span>{val}s</span>}
          />
          <h4 className='text-xl'>Custom the circle's styles </h4>
        </div>
        <code>
          <div>{`import { Circle } from 'react-count-down-animation'`}</div>
          <br />
          {`<Circle
            width={50}
            height={50}
            color='red'
            borderWidth={5}
            textColor='green'
            totalTime={40}
            currentTime={23}
            renderText={(val) => <span>{val}s</span>}
          />`}
        </code>
      </div>
      <h4 className='text-xl mb-3'>Props</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>color?</td>
            <td>
              <span className='text-green-600'>string</span>
            </td>
            <td>
              <span style={{ color: '#ffffff', backgroundColor: '#0e0551' }}>
                #0e0551
              </span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>width?</td>
            <td>
              <span className='text-green-600'>number</span>
            </td>
            <td>40</td>
            <td></td>
          </tr>
          <tr>
            <td>height?</td>
            <td>
              <span className='text-green-600'>number</span>
            </td>
            <td>40</td>
            <td></td>
          </tr>
          <tr>
            <td>negative?</td>
            <td>
              <span className='text-green-600'>boolean</span>
            </td>
            <td>
              <span className='text-blue-600'>undefined</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>textColor?</td>
            <td>
              <span className='text-green-600'>string</span>
            </td>
            <td>
              <span style={{ color: '#0e0551' }}>#0e0551</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>borderWidth?</td>
            <td>
              <span className='text-green-600'>number</span>
            </td>
            <td>3</td>
            <td></td>
          </tr>
          <tr>
            <td>backgroundColor?</td>
            <td>
              <span className='text-green-600'>string</span>
            </td>
            <td>
              <span style={{ backgroundColor: '#ffffff' }}>#ffffff</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>currentTime?</td>
            <td>
              <span className='text-green-600'>number</span>
            </td>
            <td>0</td>
            <td></td>
          </tr>
          <tr>
            <td>totalTime?</td>
            <td>
              <span className='text-green-600'>number</span>
            </td>
            <td>60</td>
            <td></td>
          </tr>
          <tr>
            <td>ready?</td>
            <td>
              <span className='text-green-600'>boolean</span>
            </td>
            <td>
              <span className='text-blue-600'>true</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>onRefresh?</td>
            <td>
              <span className='text-green-600'>() ={'>'} void</span>
            </td>
            <td>
              () ={'>'} {'{}'}
            </td>
            <td></td>
          </tr>
          <tr>
            <td>renderText?</td>
            <td>
              <span className='text-green-600'>
                () ={'>'} React.ReactNode | string
              </span>
            </td>
            <td>
              <span className='text-blue-600'>undefined</span>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default ExampleCircle
