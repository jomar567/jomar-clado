import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Footer = () => {
  return (
    <footer className='bg-blue-primary dark:bg-blue-secondary'>
      <div className="container mx-auto pt-14 pb-10">
        <h1 className=' text-center text-4xl font-bold text-blue-secondary dark:text-blue-primary mb-14'>
          JOMAR
        </h1>

        <ul className="flex flex-col justify-center rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="#home" className="text-center block py-4 pl-3 pr-4 text-gray bg-blue md:p-0 active hover:text-blue-secondary dark:text-blue-primary" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-center block py-4 pl-3 pr-4 text-gray bg-blue md:p-0 hover:text-blue-secondary dark:text-white dark:hover:text-blue-primary">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-center block py-4 pl-3 pr-4 text-gray bg-blue md:p-0 hover:text-blue-secondary dark:text-white dark:hover:text-blue-primary">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-center block py-4 pl-3 pr-4 text-gray bg-blue md:p-0 hover:text-blue-secondary dark:text-white dark:hover:text-blue-primary">
              Projects
            </a>
          </li>
        </ul>

        <div className="flex justify-center items-center flex-row mt-14">
          <a href="https://www.linkedin.com/in/jomarclado/">
            <FontAwesomeIcon icon={brands('linkedin')} className="mr-6 text-4xl mb-5 text-blue-secondary dark:text-blue-primary" />
          </a>
          <a href="https://github.com/jomar567">
            <FontAwesomeIcon icon={brands('square-github')} className="mr-6 text-4xl mb-5 text-blue-secondary dark:text-blue-primary" />
          </a>
          <a href="https://www.facebook.com/jomar.clado.79">
            <FontAwesomeIcon icon={brands('square-facebook')} className="text-4xl mb-5 text-blue-secondary dark:text-blue-primary" />
          </a>
        </div>
      </div>
      <hr className='dark:border-white' />
      <div className='text-center py-6'>
        <h1 className='text-sm dark:text-white'>©JomarClado. All Rights Reserved</h1>
      </div>
    </footer>
  )
}

export default Footer
