import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function Career() {

  const [tabShow, setTabShow] = useState(false)

  const showHideEduc = () => {
    setTabShow(false)
  }
  const showHideExp = () => {
    setTabShow(true)
  }

  return (
    <section>
      <div className="container mx-auto py-14">
        <h1 className=' text-center text-5xl md:text-8xl font-bold text-blue-secondary dark:text-blue-secondary mb-24'>
          CAREER
        </h1>

        <div className='w-full max-w-[400px] mx-auto'>
          <ul className="grid grid-cols-2 -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#careerTab" role="tablist">
            <li className="mr-2" role="presentation">
              <button onClick={showHideEduc} className={`${tabShow ? 'text-gray' : 'text-blue-secondary dark:text-blue-secondary'} inline-block text-sm dark:text-blue-primary`} type="button">
                <FontAwesomeIcon icon={solid('graduation-cap')} className=" text-sm mr-2" />
                EDUCATION
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button onClick={showHideExp} className={`${tabShow ? 'text-blue-secondary dark:text-blue-secondary' : 'text-gray'} inline-block text-sm dark:text-blue-primary`} type="button">
                <FontAwesomeIcon icon={solid('briefcase')} className=" text-sm mr-2" />
                EXPERIENCE
              </button>
            </li>
          </ul>
          <div id="careerTab" className='mt-10'>
            <div className={`${tabShow ? 'hidden' : 'block'} p-4`}>
              <div className="grid grid-cols-2 md:gap-10 gap-5 mb-5">
                <div className='flex flex-col justify-center relative
                    after:w-[10px]
                    after:h-[10px]
                    after:absolute
                    after:top-[5px]
                    after:right-[-15px]
                    after:bg-blue-secondary
                    after:rounded-full

                    before:w-[2px]
                    before:h-[110px]
                    md:before:h-[140px]
                    before:absolute
                    before:top-[5px]
                    before:right-[-11px]
                    before:bg-blue-secondary
                    before:rounded-full'>
                  <h1 className='md:text-lg text-base font-medium mb-3 text-blue-secondary'>
                    Fullstack Web Development
                  </h1>
                  <p className='md:text-base text-[.76rem] mb-1.5 dark:text-blue-primary'>KodeGo Bootcamp</p>
                  <p className='md:text-xs text-[.65rem] dark:text-blue-primary'>Oct. 2022 - Feb. 2023</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:gap-10 gap-5">
                <div></div>
                <div className='flex flex-col justify-center relative
                      before:w-[10px]
                      before:h-[10px]
                      before:absolute
                      before:top-[5px]
                      before:left-[-15px]
                      md:before:left-[-35px]
                      before:bg-blue-secondary
                      before:rounded-full'>
                  <h1 className='md:text-lg text-base font-medium mb-3 text-blue-secondary'>
                    Bachelor of Science in Information Technology
                  </h1>
                  <p className='md:text-base text-[.76rem] mb-1.5 dark:text-blue-primary'>Partido State University</p>
                  <p className='md:text-xs text-[.65rem] dark:text-blue-primary'>2015 - 2019</p>
                </div>
              </div>
            </div>
            <div className={`${tabShow ? 'block' : 'hidden'} p-4`}>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='md:text-lg text-base font-medium mb-3 text-blue-secondary'>
                  Front-end Developer
                </h1>
                <p className='md:text-basetext-[.76rem] mb-1.5 dark:text-blue-primary'>Feemo Global Solutions Inc.</p>
                <p className='md:text-xs text-[.65rem] dark:text-blue-primary'>2019 - 2022</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Career
