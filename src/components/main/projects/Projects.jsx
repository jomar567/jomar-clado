import React from 'react'

const Projects = () => {
  return (
    <section>
      <div className="container mx-auto py-14">
        <h1 className=' text-center text-5xl md:text-8xl font-bold text-heading dark:text-blue-secondary mb-24'>
          PROJECTS
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          <div className=' border-2 border-blue-secondary rounded-[30px] p-5'>
            <div className="overflow-hidden h-auto mb-4 rounded-[50px]">
              <img src={require('../../../assets/img/isarog.png')}
                  alt="Isarog Website"
                  className='w-full hover:scale-125 transition-all duration-500 cursor-pointer' />
            </div>
            <div className='pt-4 mb-8'>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                HTML
              </span>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                CSS
              </span>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                ReactJS
              </span>
            </div>
            <h1 className='text-lg font-medium mb-9 dark:text-blue-primary '>Travel website of Isarog Camarines Sur</h1>

            <a href="https://github.com/jomar567/isarog-react" target="_blank" rel="noreferrer">
              <button className='dark:text-blue-primary text-base font-medium px-4 py-2 border rounded-lg border-blue-secondary mr-4 hover:bg-blue-secondary hover:text-blue-primary hover:dark:text-white'>
                GitHub
              </button>
            </a>
            <a href="https://isarog-react.vercel.app/" target="_blank" rel="noreferrer">
              <button className='dark:text-white text-base font-medium px-4 py-2 rounded-lg bg-blue-secondary text-blue-primary hover:bg-transparent hover:text-gray hover:dark:text-blue-primary hover:border hover:border-blue-secondary'>
                Live Demo
              </button>
            </a>
          </div>

          <div className=' border-2 border-blue-secondary rounded-[30px] p-5'>
            <div className="overflow-hidden h-auto mb-4 rounded-[50px]">
              <img src={require('../../../assets/img/spaceverse.png')}
                  alt="SRMS Website"
                  className='w-full hover:scale-125 transition-all duration-500 cursor-pointer' />
            </div>
            <div className='pt-4 mb-8 '>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                SASS
              </span>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                ReactJS
              </span>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                Bootstrap
              </span>
            </div>
            <h1 className='text-lg font-medium mb-9 dark:text-blue-primary '>Space website about planets of solar system.</h1>

            <a href="https://github.com/jomar567/project-2-planets" target="_blank" rel="noreferrer">
              <button className='dark:text-blue-primary text-base font-medium px-4 py-2 border rounded-lg border-blue-secondary mr-4 hover:bg-blue-secondary hover:text-blue-primary hover:dark:text-white'>
                GitHub
              </button>
            </a>
            <a href="https://space-verse.vercel.app/" target="_blank" rel="noreferrer">
              <button className='dark:text-white text-base font-medium px-4 py-2 rounded-lg bg-blue-secondary text-blue-primary hover:bg-transparent hover:text-gray hover:dark:text-blue-primary hover:border hover:border-blue-secondary'>
                Live Demo
              </button>
            </a>
          </div>

          <div className=' border-2 border-blue-secondary rounded-[30px] p-5'>
            <div className="overflow-hidden h-auto mb-4 rounded-[50px]">
              <img src={require('../../../assets/img/srms.png')}
                  alt="SRMS Website"
                  className='w-full hover:scale-125 transition-all duration-500 cursor-pointer' />
            </div>
            <div className='pt-4 mb-8'>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                Laravel
              </span>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                MySQL
              </span>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                Tailwind
              </span>
            </div>
            <h1 className='text-lg font-medium mb-9 dark:text-blue-primary '>
              Student Result Management System with Student and Admin Dashboard
            </h1>

            <a href="https://github.com/jomar567/capstone-srms" target="_blank" rel="noreferrer">
              <button className='dark:text-blue-primary text-base font-medium px-4 py-2 border rounded-lg border-blue-secondary mr-4 hover:bg-blue-secondary hover:text-blue-primary hover:dark:text-white'>
                GitHub
              </button>
            </a>
            <a href="https://srms.kodego.online/" target="_blank" rel="noreferrer">
              <button className='dark:text-white text-base font-medium px-4 py-2 rounded-lg bg-blue-secondary text-blue-primary hover:bg-transparent hover:text-gray hover:dark:text-blue-primary hover:border hover:border-blue-secondary'>
                Live Demo
              </button>
            </a>
          </div>

          <div className=' border-2 border-blue-secondary rounded-[30px] p-5'>
            <div className="overflow-hidden h-auto mb-4 rounded-[50px]">
              <img src={require('../../../assets/img/portfolio.png')}
                  alt="My Personal Website"
                  className='w-full hover:scale-125 transition-all duration-500 cursor-pointer' />
            </div>
            <div className='pt-4 mb-8'>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                ReactJS
              </span>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                TailwindCSS
              </span>
            </div>
            <h1 className='text-lg font-medium mb-9 dark:text-blue-primary '>
              My personal website portfolio
            </h1>

            <a href="https://github.com/jomar567/jomar-clado" target="_blank" rel="noreferrer">
              <button className='dark:text-blue-primary text-base font-medium px-4 py-2 border rounded-lg border-blue-secondary mr-4 hover:bg-blue-secondary hover:text-blue-primary hover:dark:text-white'>
                GitHub
              </button>
            </a>
            <a href="https://jomar-clado.vercel.app/" target="_blank" rel="noreferrer">
              <button className='dark:text-white text-base font-medium px-4 py-2 rounded-lg bg-blue-secondary text-blue-primary hover:bg-transparent hover:text-gray hover:dark:text-blue-primary hover:border hover:border-blue-secondary'>
                Live Demo
              </button>
            </a>
          </div>

          <div className=' border-2 border-blue-secondary rounded-[30px] p-5'>
            <div className="overflow-hidden h-auto mb-4 rounded-[50px]">
              <img src={require('../../../assets/img/burger.png')}
                  alt="Burger Website"
                  className='w-full hover:scale-125 transition-all duration-500 cursor-pointer' />
            </div>
            <div className='pt-4 mb-8'>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                HTML
              </span>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                CSS
              </span>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                Bootstrap
              </span>
            </div>
            <h1 className='text-lg font-medium mb-9 dark:text-blue-primary '>
              KodeBurger Website
            </h1>

            <a href="https://github.com/jomar567/kodego-burger" target="_blank" rel="noreferrer">
              <button className='dark:text-blue-primary text-base font-medium px-4 py-2 border rounded-lg border-blue-secondary mr-4 hover:bg-blue-secondary hover:text-blue-primary hover:dark:text-white'>
                GitHub
              </button>
            </a>
            <a href="https://kodego-burger.vercel.app/" target="_blank" rel="noreferrer">
              <button className='dark:text-white text-base font-medium px-4 py-2 rounded-lg bg-blue-secondary text-blue-primary hover:bg-transparent hover:text-gray hover:dark:text-blue-primary hover:border hover:border-blue-secondary'>
                Live Demo
              </button>
            </a>
          </div>

          <div className=' border-2 border-blue-secondary rounded-[30px] p-5'>
            <div className="overflow-hidden h-auto mb-4 rounded-[50px]">
              <img src={require('../../../assets/img/react.png')}
                  alt="React APIs Website"
                  className='w-full hover:scale-125 transition-all duration-500 cursor-pointer' />
            </div>
            <div className='pt-4 mb-8'>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                ReactJS
              </span>
              <span className=" dark:text-blue-primary text-xs font-medium mr-2 px-3 py-2 rounded border border-blue-secondary">
                Bootstrap
              </span>
            </div>
            <h1 className='text-lg font-medium mb-9 dark:text-blue-primary '>
              Fetching APIs from ReactJS demo website
            </h1>

            <a href="https://github.com/jomar567/activity-react-router" target="_blank" rel="noreferrer">
              <button className='dark:text-blue-primary text-base font-medium px-4 py-2 border rounded-lg border-blue-secondary mr-4 hover:bg-blue-secondary hover:text-blue-primary hover:dark:text-white'>
                GitHub
              </button>
            </a>
            <a href="https://react-activity-group-1.vercel.app/" target="_blank" rel="noreferrer">
              <button className='dark:text-white text-base font-medium px-4 py-2 rounded-lg bg-blue-secondary text-blue-primary hover:bg-transparent hover:text-gray hover:dark:text-blue-primary hover:border hover:border-blue-secondary'>
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
