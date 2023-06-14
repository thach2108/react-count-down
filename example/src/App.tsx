import { Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ExampleCircle from './pages/Circle'
import ExampleLine from './pages/Line'

const App = () => {
  return (
    <div className='mx-auto max-w-screen-xl mt-8 mb-16 px-4'>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <div className='grid grid-cols-10 gap-4'>
            <div className='col-span-2'>
              <ul className='pl-5'>
                <li className='text-lg'>
                  <Link to='/react-count-down'>Circle animation</Link>
                </li>
                <li className='text-lg'>
                  <Link to='/react-count-down/line'>Line animation</Link>
                </li>
              </ul>
            </div>
            <div className='col-span-8'>
              <Routes>
                <Route path='/' element={<ExampleCircle />} />
                <Route path='/react-count-down' element={<ExampleCircle />} />
                <Route
                  path='/react-count-down/circle'
                  element={<ExampleCircle />}
                />
                <Route
                  path='/react-count-down/line'
                  element={<ExampleLine />}
                />
              </Routes>
            </div>
          </div>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}
export default App
