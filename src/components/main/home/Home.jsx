import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <section id='home'>
      <div className=' pt-20 pb-10 flex justify-center items-center min-h-screen w-full'>
        <div className="container mx-auto relative">
          <div className='grid md:grid-cols-2 gap-5'>
            <div className='text-center md:text-left flex flex-col justify-center'>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5
                }}
                transition={{
                  duration: 0.5
                }}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -50
                  },
                  visible: {
                    opacity: 1,
                    x: 0
                  }
                }}
              >
                <h1 className='md:text-3xl text-2xl font-medium dark:text-blue-primary'>HELLO, I AM</h1>
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
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5
                }}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -50
                  },
                  visible: {
                    opacity: 1,
                    x: 0
                  }
                }}
              >
                <p className=' md:text-base text-sm dark:text-blue-primary'>I am a web developer with 3 years of experience <br />
                  specializing in front-end development.</p>
                <a href="#contact" className=' w-fit'>
                  <button className='bg-blue-secondary text-base text-white py-2.5 px-7 mx-auto block md:mx-0 rounded-lg my-5 w-fit'>
                    Let's Talk
                  </button>
                </a>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.5
                }}
                variants={{
                  hidden: {
                    opacity: 0
                  },
                  visible: {
                    opacity: 1,
                    x: 0
                  }
                }}
              >
              {/* Social Media */}
                <p className='md:absolute bottom-0 text-sm flex justify-center items-center gap-4 dark:text-blue-primary'>
                  Follow me on:
                  <span className=' text-blue-secondary gap-4 flex'>
                    <a href="https://www.linkedin.com/in/jomarclado/">
                      <FontAwesomeIcon icon={brands('linkedin')} className=" text-2xl cursor-pointer" />
                    </a>
                    <a href="https://github.com/jomar567">
                      <FontAwesomeIcon icon={brands('github')} className=" text-2xl cursor-pointer" />
                    </a>
                    <a href="https://www.facebook.com/jomar.clado.79">
                      <FontAwesomeIcon icon={brands('facebook')} className=" text-2xl cursor-pointer" />
                    </a>
                  </span>
                </p>
              </motion.div>
            </div>

            <div className='flex justify-center items-center'>
              <img src='img/BannerImg.png' alt="Profile" className='pointer-events-none' />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
