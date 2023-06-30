import { Suspense } from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import ExampleCircle from './pages/Circle'
import ExampleLine from './pages/Line'

const App = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-4'>
      <BrowserRouter basename='/react-count-down'>
        <Suspense fallback={<div>Loading...</div>}>
          <div className='grid grid-cols-10 gap-4'>
            <div className='col-span-2 h-screen'>
              <div className='box-border fixed pt-3 pb-8 flex flex-col justify-between h-full top-0'>
                <ul className='pl-5'>
                  <li className='text-lg'>
                    <Link to='/'>Circle animation</Link>
                  </li>
                  <li className='text-lg'>
                    <Link to='/line'>Line animation</Link>
                  </li>
                </ul>
                <a href='https://github.com/thach2108/react-count-down-animation'>
                  Github reponsitory
                </a>
              </div>
            </div>
            <div className='col-span-8 mt-8 mb-10'>
              <Routes>
                <Route path='/' element={<ExampleCircle />} />
                <Route path='/line' element={<ExampleLine />} />
                <Route path='*' element={<Navigate to='/' replace />} />
              </Routes>
            </div>
          </div>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}
export default App
