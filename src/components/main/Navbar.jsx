import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Navbar = ({ handleClick, activeDark }) => {

  return (
    <nav className={activeDark}>
      <div className='px-3 py-5 w-full bg-blue-primary dark:bg-white z-40'>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#home" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-blue-secondary">
              JC
            </span>
          </a>
          <div className='md:order-2 flex justify-center items-center'>
            <button className=' bg-blue-secondary md:text-sm text-xs text-white py-3 px-5 mr-4 rounded-lg'>
              Download CV
            </button>
            {
              activeDark
              ?
              <FontAwesomeIcon onClick={handleClick} icon={solid('moon')} className="text-2xl cursor-pointer text-blue-secondary" />
              :
              <FontAwesomeIcon onClick={handleClick} icon={solid('sun')} className="text-2xl cursor-pointer text-yellow-300" />
            }
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="hidden w-full md:block md:w-auto md:order-1" id="navbar-default">
            <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="#home" className="block py-4 pl-3 pr-4 text-gray bg-blue md:p-0 active hover:text-blue-secondary dark:text-blue-secondary" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block py-4 pl-3 pr-4 text-gray bg-blue md:p-0 hover:text-blue-secondary dark:text-blue-primary dark:hover:text-blue-secondary">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="block py-4 pl-3 pr-4 text-gray bg-blue md:p-0 hover:text-blue-secondary dark:text-blue-primary dark:hover:text-blue-secondary">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="block py-4 pl-3 pr-4 text-gray bg-blue md:p-0 hover:text-blue-secondary dark:text-blue-primary dark:hover:text-blue-secondary">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contacts" className="block py-4 pl-3 pr-4 text-gray bg-blue md:p-0 hover:text-blue-secondary dark:text-blue-primary dark:hover:text-blue-secondary">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
