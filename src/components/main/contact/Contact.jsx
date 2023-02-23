import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto py-14">
        <h1 className=' text-center text-5xl md:text-8xl font-bold text-heading dark:text-blue-secondary mb-24'>
          CONTACT
        </h1>

        <div className="grid md:grid-cols-2 gap-5">
          <div className='flex flex-col'>
            <h1 className='mb-10 text-2xl dark:text-blue-primary'>
              Talk to me
            </h1>
            <div className='p-4'>

            </div>
          </div>

          <div>
            <h1 className='mb-10 text-2xl dark:text-blue-primary'>
              Write me
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
