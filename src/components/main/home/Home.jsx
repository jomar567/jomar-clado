import React from 'react'
import {Typewriter, Cursor} from 'react-simple-typewriter'

const Home = () => {
  return (
      <div className='absolute flex justify-center items-center min-h-screen w-full px-3'>
      <div className="container mx-auto">
        <div className='grid md:grid-cols-2 gap-5'>
          <div className='text-center md:text-left flex flex-col justify-center'>
            <h1 className='text-3xl font-medium'>HELLO, I AM</h1>
            <h1 className='text-blue-secondary text-6xl font-semibold py-4'>
              <Typewriter
                words={['JOMAR CLADO', 'WEB DEVELOPER', 'CODER']}
                loop={0}
                cursor
                typeSpeed={180}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </h1>
            <p className=' text-base'>I am a web developer with 3 years of experience <br />
              specializing in front-end development.</p>
            <button className=' bg-blue-secondary text-base text-white py-2.5 px-7 mr-4 rounded-lg mt-4 w-fit'>
              Let's Talk
            </button>
          </div>

          <div className='flex justify-center items-center'>
            <img src={require('../../../assets/img/BannerImg.png')} alt="Profile" />
          </div>
        </div>
      </div>
      </div>
  )
}

export default Home