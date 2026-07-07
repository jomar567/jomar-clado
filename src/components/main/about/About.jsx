import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const About = () => {
  return (
    <section id='about'>
      <div className="container mx-auto py-32">
        <h1 className=' text-center text-5xl md:text-8xl font-bold text-blue-secondary mb-24'>
          ABOUT
        </h1>
        {/* Introduction */}
        <div className='grid md:grid-cols-5 gap-6 mb-20'>
          <figure className='hidden col-span-2 md:flex h-4/6 lg:h-full justify-center'>
            <img src='img/about.png' alt="About" className='m-0' />
          </figure>

          <div className='col-span-3'>
            <h1 className='text-2xl md:text-4xl font-semibold text-blue-secondary mb-5'>
              Who Am I?
            </h1>
            <p className=' leading-6 text-justify dark:text-blue-primary'>
              I'm a passionate Full-Stack Web Developer with over 6 years of professional experience building responsive, scalable, and user-focused web applications. I specialize in <span className='text-blue-secondary font-semibold'> HTML, CSS, JavaScript, React, PHP, Laravel, </span> and <span className='text-blue-secondary font-semibold'>MySQL</span>, with hands-on experience deploying and maintaining applications on <span className='text-blue-secondary font-semibold'>AWS</span>.
              <br /> <br />
              I enjoy turning ideas into clean, functional, and maintainable solutions while continuously improving my skills and staying up to date with modern web technologies. Whether working independently or collaborating with a team, I take pride in writing quality code, solving complex problems, and delivering projects that create real value for users and businesses.
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
            My goal is to work with organizations and clients who value innovation, collaboration, and continuous improvement. I strive to build reliable, high-quality web applications that enhance user experience and support business growth.
            <br/><br />
            As a developer, I'm committed to expanding my expertise, embracing new technologies, and contributing to projects that challenge me professionally. I aim to establish long-term partnerships by consistently delivering dependable solutions, clear communication, and measurable results.
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
