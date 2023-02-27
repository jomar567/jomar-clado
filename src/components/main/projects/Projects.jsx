import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Data from '../../../assets/data.json'

const Projects = () => {
  return (
    <section id='projects'>
      <div className="container mx-auto py-32">
        <h1 className=' text-center text-5xl md:text-8xl font-bold text-heading dark:text-blue-secondary mb-24'>
          PROJECTS
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {
            Data.map(({id, image, alt, techStack, title, github, demo}) => (
                <div key={id} className=' border-2 border-blue-secondary rounded-[30px] p-5'>
                  <div className="overflow-hidden h-auto mb-4 rounded-[50px]">
                    <img src={image}
                        alt={alt}
                        className='w-full hover:scale-125 transition-all duration-500 cursor-pointer' />
                  </div>
                  <div className='pt-4 mb-8'>
                    {
                      techStack.map((tech) => (
                        <span key={tech} className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                          {tech}
                        </span>
                      ))
                    }
                  </div>
                  <h1 className='text-lg font-medium mb-9 dark:text-blue-primary '>{title}</h1>

                  <a href={github} target="_blank" rel="noreferrer">
                    <button className='dark:text-blue-primary text-base font-medium px-4 py-2 mb-3 border rounded-lg border-blue-secondary mr-4 hover:bg-blue-secondary hover:text-blue-primary hover:dark:text-white'>
                      <FontAwesomeIcon icon={brands('github')} className="mr-2" />
                      GitHub
                    </button>
                  </a>
                  <a href={demo} target="_blank" rel="noreferrer">
                    <button className='dark:text-white text-base font-medium px-4 py-2 rounded-lg bg-blue-secondary text-blue-primary hover:bg-transparent hover:text-gray hover:dark:text-blue-primary hover:border hover:border-blue-secondary'>
                      <FontAwesomeIcon icon={solid('eye')} className="mr-2" />
                      Live Demo
                    </button>
                  </a>
                </div>
              )
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
