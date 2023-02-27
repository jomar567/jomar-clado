import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_331onk9', 'template_p5lwu7m', form.current, 'foML8Zfx8-xSzM_jT')
    .then((result) => {
      document.querySelector("#success").innerHTML = "Email Sent Successfully"
    }, (error) => {
      document.querySelector("#error").innerHTML = "Email not sent!"
    });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <div className="container mx-auto py-32">
        <h1 className=' text-center text-5xl md:text-8xl font-bold text-blue-secondary mb-24'>
          CONTACT
        </h1>

        <div className="grid md:grid-cols-6 lg:gap-8 gap-4 w-full max-w-5xl mx-auto">
          <div className='flex flex-col md:col-span-2 col-span-4 mb-5'>
            <h1 className='mb-10 text-2xl font-medium dark:text-blue-primary'>
              Talk to me
            </h1>
            {/* Email */}
            <article className='px-4 py-6 mb-5 bg-blue-violet w-full md:max-w-xs rounded-lg flex flex-col justify-center items-center'>
              <FontAwesomeIcon icon={regular('envelope')} className="mr-2 text-2xl mb-5" />
              <h1 className='text-xl font-medium mb-1'>Email</h1>
              <p className='font-medium text-sm mb-5'>cladojomar881@gmail.com</p>
              <a href="mailto:cladojomar881@gmail.com" target="_blank" rel="noreferrer" className='text-blue-secondary'>
                Send message
              </a>
            </article>

            {/* Messenger */}
            <article className='px-4 py-6 mb-5 bg-blue-violet w-full md:max-w-xs rounded-lg flex flex-col justify-center items-center'>
              <FontAwesomeIcon icon={brands('facebook-messenger')} className="mr-2 text-2xl mb-5" />
              <h1 className='text-xl font-medium mb-1'>Messenger</h1>
              <p className='font-medium text-sm mb-5'>Jomar Clado</p>
              <a href="https://m.me/jomar.clado.79/" target="_blank" rel="noreferrer" className='text-blue-secondary'>
                Send message
              </a>
            </article>

            {/* WhatsApp */}
            <article className='px-4 py-6 bg-blue-violet w-full md:max-w-xs rounded-lg flex flex-col justify-center items-center'>
              <FontAwesomeIcon icon={brands('whatsapp')} className="mr-2 text-2xl mb-5" />
              <h1 className='text-xl font-medium mb-1'>WhatsApp</h1>
              <p className='font-medium text-sm mb-5'>+639319918329</p>
              <a href=" https://wa.me/639319918329" target="_blank" rel="noreferrer" className='text-blue-secondary'>
                Send message
              </a>
            </article>
          </div>

          <div className=' col-span-4 md:px-7'>
            <h1 className='mb-10 text-2xl font-medium dark:text-blue-primary'>
              Write me
            </h1>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col mb-4'>
              <input type="text" name='name' placeholder='Full Name' className='py-3 bg-transparent border-blue-violet border-2 focus:ring-blue-violet focus:border-blue-violet mb-5 rounded-lg' required />
              <input type="email" name='email' placeholder='Your Email' className='py-3 bg-transparent border-blue-violet border-2 focus:ring-blue-violet focus:border-blue-violet mb-5 rounded-lg' required />
              <textarea name="message" id="" rows="7" placeholder='Message' className='bg-transparent border-blue-violet border-2 focus:ring-blue-violet focus:border-blue-violet rounded-lg' required></textarea>

              <button type="submit" className='bg-blue-violet px-6 py-4 mt-5 w-max rounded-lg'>Send Message</button>
            </form>
            <span id='success' className=' text-base text-blue-secondary dark:text-blue-violet'>
            </span>
            <span id='error' className=' text-base text-red-600'>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
