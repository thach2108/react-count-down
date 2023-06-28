import React from 'react'
import { EDirectionType, Line } from 'react-count-down-animation'

const ExampleLine = () => {
  return (
    <React.Fragment>
      <div className='mb-5'>
        <div className='mb-3 flex items-center gap-4'>
          <Line borderColor='#14c7d7' />
          <h4 className='text-xl'>Positive</h4>
        </div>
        <code>
          <div>{`import { Line } from 'react-count-down-animation'`}</div>
          <br />
          {`<Line borderColor='#14c7d7' />`}
        </code>
      </div>
      <div className='mb-5'>
        <div className='mb-3 flex items-center gap-4'>
          <Line borderColor='#14c7d7' negative />
          <h4 className='text-xl'>Negative</h4>
        </div>
        <code>
          <div>{`import { Line } from 'react-count-down-animation'`}</div>
          <br />
          {`<Line borderColor='#14c7d7' negative />`}
        </code>
      </div>
      <div className='mb-5'>
        <div className='mb-3 flex items-center gap-4'>
          <Line
            gradientBgColors={[
              '#22c55e',
              '#84cc16',
              '#eab308',
              '#f59e0b',
              '#f97316',
              '#dc2626',
              '#dc2626'
            ]}
          />
          <h4 className='text-xl'>Gradient</h4>
        </div>
        <code>
          <div>{`import { Line } from 'react-count-down-animation'`}</div>
          <br />
          {`<Line
            gradientBgColors={[
              '#22c55e',
              '#84cc16',
              '#eab308',
              '#f59e0b',
              '#f97316',
              '#dc2626',
              '#dc2626'
            ]}
          />`}
        </code>
      </div>
      <div className='mb-5'>
        <div className='mb-3 flex items-center gap-4 custom'>
          <Line
            width={50}
            height={50}
            color='red'
            totalTime={40}
            currentTime={23}
            borderColor='violet'
            direction={EDirectionType.VERTICAL}
          />
          <h4 className='text-xl'>Custom styles </h4>
        </div>
        <code>
          <div>{`import { EDirectionType, Line } from 'react-count-down-animation'`}</div>
          <br />
          {`<Line
            width={50}
            height={50}
            color='red'
            totalTime={40}
            currentTime={23}
            borderColor='violet'
            direction={EDirectionType.VERTICAL}
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
              <span style={{ color: '#0e0551' }}>#ffffff</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>width?</td>
            <td>
              <span className='text-green-600'>number</span>
            </td>
            <td>200</td>
            <td></td>
          </tr>
          <tr>
            <td>height?</td>
            <td>
              <span className='text-green-600'>number</span>
            </td>
            <td>20</td>
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
            <td>borderColor?</td>
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
            <td>backgroundColor?</td>
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
            <td>direction?</td>
            <td>
              <span className='text-green-600'>enum EDirectionType</span>
            </td>
            <td>EDirectionType.HORIZONTAL</td>
            <td></td>
          </tr>
          <tr>
            <td>currentTime?</td>
            <td>
              <span className='text-green-600'>number</span>
            </td>
            <td>60</td>
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
            <td>gradientBgColors?</td>
            <td>
              <span className='text-green-600'>string[]</span>
            </td>
            <td>
              <span className='text-blue-600'>[]</span>
            </td>
            <td>Min length is 2. ex: ["green", "yellow", "red"]</td>
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
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default ExampleLine
