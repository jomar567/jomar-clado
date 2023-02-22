import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const About = () => {
  return (
    <section>
      <div className="container mx-auto py-14">
        <h1 className=' text-center text-5xl md:text-8xl font-bold text-heading dark:text-blue-secondary mb-24'>
          ABOUT
        </h1>
        {/* Introduction */}
        <div className='grid md:grid-cols-5 gap-6 mb-20'>
          <figure className='hidden col-span-2 md:flex h-4/6 lg:h-full justify-center'>
            <img src={require('../../../assets/img/about.png')} alt="About" className='m-0' />
          </figure>

          <div className='col-span-3'>
            <h1 className='text-2xl md:text-4xl font-semibold text-blue-secondary mb-5'>
              Who Am I?
            </h1>
            <p className=' leading-6 text-justify dark:text-blue-primary'>
              Passionate web developer with over 3 years of experience in web development specializing
              in front-end development and a passion for responsive web design and a firm believer
              in the mobile-first approach. My expertise lies in HTML, CSS, JavaScript, and a frontend
              framework such as React.<br /> <br />

              A great communicator and a team player who enjoys collaborating with designers,
              and other developers to ensure that projects are delivered on time and to the highest quality. <br /><br />

              I am always eager to learn new technologies and stay up-to-date with the latest industry trends,
              and I am committed to continuous improvement and personal growth as a developer.
            </p>
          </div>
        </div>
        {/* Goals */}
        <div className='grid md:grid-cols-5 gap-6'>
          <div className='col-span-3'>
            <h1 className='text-2xl md:text-4xl font-semibold text-blue-secondary mb-5'>
              My Goals
            </h1>
            <p className=' leading-6 text-justify dark:text-blue-primary'>
            I see myself working with people that develops and innovates web applications that
            could help other people in their daily lives. As a web
            developer, I never stop practicing my skills and widening my knowledge on learning
            different tech stacks because technology never stops growing. <br /><br />
            Be able to contribute to the success of different organization by delivering high-quality
            web applications that meet the needs of end-users and business stakeholders.
            </p>
          </div>
          <div className='md:col-span-2 col-span-3 flex h-4/6 lg:h-full justify-center'>
            <div className='bg-blue-violet md:w-96 w-full h-96 md:h-96 md:p-8 p-4 whitespace-pre-line leading-6 rounded-xl dark:shadow-2xl dark:shadow-blue-violet'>
            <code>
              <Typewriter
                words={[
                  `while not achieved_goal:\n
                  take_action()\n
                  console.log("Success is a journey, not a destination. Keep working towards your goals.")
                  \n
                  <CODE>
                  <CODE>
                  <CODE>`
                ]}
                loop={0}
                cursor
                typeSpeed={70}
                deleteSpeed={10}
                delaySpeed={1000}
              />
            </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
