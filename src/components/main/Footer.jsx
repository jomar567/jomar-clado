import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Footer = () => {
  return (
    <footer className='bg-blue-primary'>
      <div className="container mx-auto pt-14 pb-10">
        <h1 className=' text-center text-4xl font-bold text-heading dark:text-blue-secondary mb-14'>
          JOMAR
        </h1>

        <ul className="flex flex-col justify-center rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="#home" className="text-center block py-4 pl-3 pr-4 text-gray bg-blue md:p-0 active hover:text-blue-secondary dark:text-blue-secondary" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-center block py-4 pl-3 pr-4 text-gray bg-blue md:p-0 hover:text-blue-secondary dark:text-blue-primary dark:hover:text-blue-secondary">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-center block py-4 pl-3 pr-4 text-gray bg-blue md:p-0 hover:text-blue-secondary dark:text-blue-primary dark:hover:text-blue-secondary">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-center block py-4 pl-3 pr-4 text-gray bg-blue md:p-0 hover:text-blue-secondary dark:text-blue-primary dark:hover:text-blue-secondary">
              Projects
            </a>
          </li>
        </ul>

        <div className="flex justify-center items-center flex-row mt-14">
          <FontAwesomeIcon icon={brands('linkedin')} className="mr-6 text-4xl mb-5 text-blue-secondary" />
          <FontAwesomeIcon icon={brands('square-github')} className="mr-6 text-4xl mb-5 text-blue-secondary" />
          <FontAwesomeIcon icon={brands('square-facebook')} className="text-4xl mb-5 text-blue-secondary" />
        </div>
      </div>
      <hr />
      <div className='text-center py-6'>
        <h1 className='text-sm'>©JomarClado. All Rights Reserved</h1>
      </div>
    </footer>
  )
}

export default Footer
