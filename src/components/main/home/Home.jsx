import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Home = () => {
  return (
    <section>
      <div className='py-20 md:py-0 absolute flex justify-center items-center min-h-screen w-full px-3'>
      <div className="container mx-auto relative">
        <div className='grid md:grid-cols-2 gap-5'>
          <div className='text-center md:text-left flex flex-col justify-center'>
            <h1 className='md:text-3xl text-2xl font-medium'>HELLO, I AM</h1>
            <h1 className='text-blue-secondary md:text-6xl text-5xl font-semibold py-4'>
              <Typewriter
                words={['JOMAR CLADO', 'WEB DEVELOPER', 'CODER']}
                loop={0}
                cursor
                typeSpeed={180}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </h1>
            <p className=' md:text-base text-sm'>I am a web developer with 3 years of experience <br />
              specializing in front-end development.</p>
            <button className=' bg-blue-secondary text-base text-white py-2.5 px-7 mx-auto block md:mx-0 rounded-lg my-4 w-fit'>
              Let's Talk
            </button>
            {/* Social Media */}
          <p className='lg:absolute right-0'>
            <span className='hidden md:block'>Follow me:</span>
            <span className='text-blue-secondary'>
              <a href="">
                <FontAwesomeIcon icon={brands('linkedin')} className=" text-lg cursor-pointer" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={brands('github')} className=" text-lg cursor-pointer mx-5 md:mx-0" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={brands('facebook')} className=" text-lg cursor-pointer" />
              </a>
            </span>
          </p>
          </div>

          <div className='flex justify-center items-center'>
            <img src={require('../../../assets/img/BannerImg.png')} alt="Profile" />
          </div>
          
        </div>
      </div>
      </div>
    </section>
  )
}

export default Home