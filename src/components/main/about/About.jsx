import React from 'react'

const About = () => {
  return (
    <section>
      <div className="py-14">
        <div className="container mx-auto">
          <h1 className=' text-center text-5xl md:text-8xl font-bold text-heading dark:text-blue-secondary mb-24'>
            ABOUT
          </h1>
          <div className='grid md:grid-cols-5 gap-6'>
            <figure className='hidden col-span-2 md:flex h-4/6 lg:h-full justify-center'>
              <img src={require('../../../assets/img/about.png')} alt="About" className='m-0' />
            </figure>

            <div className='col-span-3'>
              <h1 className='text-2xl md:text-4xl font-semibold text-blue-secondary mb-5'>
                Who Am I?
              </h1>
              <p className=' leading-6 text-justify'>
                Passionate web developer having 3+ years of experience in web development specializing
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
        </div>
      </div>
    </section>
  )
}

export default About