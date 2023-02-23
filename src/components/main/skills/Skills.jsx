import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Skills = () => {
  return (
    <section>
      <div className="container mx-auto py-14">
        <h1 className=' text-center text-5xl md:text-8xl font-bold text-heading dark:text-blue-secondary mb-24'>
          SKILLS
        </h1>

        <div className="grid md:grid-cols-2 gap-6 md:mb-10 mb-6">
          <div className='flex justify-center items-center flex-col'>
            <h1 className='text-xl md:text-2xl font-semibold text-blue-secondary mb-5'>
              FRONTEND
            </h1>
            <div className="bg-blue-violet p-5 rounded-xl w-full md:max-w-[500px] dark:shadow-2xl dark:shadow-blue-violet">
              <div className="grid md:grid-cols-2 md:gap-4">
                <div className='flex flex-col'>
                  <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                    <FontAwesomeIcon icon={brands('html5')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                    <span className='px-4'>
                      HTML5
                    </span>
                  </button>
                  <span className='text-center text-xs'>
                    Advanced
                  </span>
                  <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                    <FontAwesomeIcon icon={brands('css3-alt')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                    <span className='px-4'>
                      CSS3
                    </span>
                  </button>
                  <span className='text-center text-xs'>
                    Advanced
                  </span>
                  <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                    <FontAwesomeIcon icon={brands('square-js')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                    <span className='px-4'>
                      Javascript
                    </span>
                  </button>
                  <span className='text-center text-xs'>
                    Intermediate
                  </span>
                </div>

                <div className='flex flex-col'>
                  <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                    <FontAwesomeIcon icon={brands('react')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                    <span className='px-4'>
                      ReactJS
                    </span>
                  </button>
                  <span className='text-center text-xs'>
                    Intermediate
                  </span>
                  <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                    <FontAwesomeIcon icon={brands('bootstrap')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                    <span className='px-4'>
                      Bootstrap
                    </span>
                  </button>
                  <span className='text-center text-xs'>
                    Advanced
                  </span>
                  <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                    <FontAwesomeIcon icon={brands('sass')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                    <span className='px-4'>
                      SASS
                    </span>
                  </button>
                  <span className='text-center text-xs'>
                    Advanced
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <h1 className='text-xl md:text-2xl font-semibold text-blue-secondary mb-5'>
              BACKEND
            </h1>
            <div className="bg-blue-violet p-5 rounded-xl w-full md:max-w-[500px] h-full dark:shadow-2xl dark:shadow-blue-violet">
              <div className="grid md:grid-cols-2 md:gap-4">
                <div className='flex flex-col'>
                  <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                    <FontAwesomeIcon icon={brands('php')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                    <span className='px-4'>
                      PHP
                    </span>
                  </button>
                  <span className='text-center text-xs'>
                    Basic
                  </span>
                  <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                    <FontAwesomeIcon icon={solid('server')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                    <span className='px-4'>
                      Firebase
                    </span>
                  </button>
                  <span className='text-center text-xs'>
                    Basic
                  </span>
                  <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                    <FontAwesomeIcon icon={brands('laravel')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                    <span className='px-4'>
                      Laravel
                    </span>
                  </button>
                  <span className='text-center text-xs'>
                    Intermediate
                  </span>
                </div>

                <div className='flex flex-col'>
                  <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                    <FontAwesomeIcon icon={solid('database')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                    <span className='px-4'>
                      MySQL
                    </span>
                  </button>
                  <span className='text-center text-xs'>
                    Intermediate
                  </span>
                  <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                    <FontAwesomeIcon icon={brands('node')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                    <span className='px-4'>
                      NodeJS
                    </span>
                  </button>
                  <span className='text-center text-xs'>
                    Basic
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-xl md:text-2xl font-semibold text-blue-secondary mb-5'>
            OTHERS
          </h1>
          <div className="bg-blue-violet p-5 rounded-xl w-full md:max-w-[500px] h-full dark:shadow-2xl dark:shadow-blue-violet">
            <div className="grid md:grid-cols-2 md:gap-4">
              <div className='flex flex-col'>
                <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                  <FontAwesomeIcon icon={brands('github')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                  <span className='px-4'>
                    GitHub
                  </span>
                </button>
                <span className='text-center text-xs'>
                  Intermediate
                </span>
                <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                  <FontAwesomeIcon icon={brands('git-alt')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                  <span className='px-4'>
                    Git
                  </span>
                </button>
                <span className='text-center text-xs'>
                  Intermediate
                </span>
              </div>

              <div className='flex flex-col'>
                <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                  <FontAwesomeIcon icon={brands('figma')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                  <span className='px-4'>
                    Figma
                  </span>
                </button>
                <span className='text-center text-xs'>
                  Basic
                </span>
                <button type="button" className="w-full max-w-[180px] mx-auto my-2 bg-white text-blue-violet font-semibold rounded-lg text-sm text-center inline-flex items-center">
                  <FontAwesomeIcon icon={solid('rectangle-ad')} className=" text-3xl cursor-pointer lg:px-4 px-2 py-2 bg-gray rounded-bl-lg rounded-tl-lg" />
                  <span className='px-4'>
                    AdobeXD
                  </span>
                </button>
                <span className='text-center text-xs'>
                  Basic
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
