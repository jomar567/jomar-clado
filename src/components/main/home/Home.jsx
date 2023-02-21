import React from 'react'
import {Typewriter, Cursor} from 'react-simple-typewriter'

const Home = () => {
  return (
      <div className='absolute flex justify-center items-center min-h-screen w-full px-3 md:px-0'>
      <div className="container mx-auto">
        <div className='grid md:grid-cols-2 gap-5'>
          <div className='text-center'>
            <h1 className='text-3xl font-medium'>HELLO, I AM</h1>
            <h1 className='text-blue-secondary text-5xl font-semibold'>
            <Typewriter
            words={['JOMAR CLADO', 'WEB DEVELOPER', 'CODER']}
            loop={0}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
              <span className='text-blue-secondary'>
                <Cursor />
              </span>
            </h1>
          </div>

          <div>
            Image
          </div>
        </div>
      </div>
      </div>
  )
}

export default Home