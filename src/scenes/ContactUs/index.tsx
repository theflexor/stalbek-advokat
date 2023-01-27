import { SelectedPage } from '@/shared/types'
import React from 'react'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import { useForm } from 'react-hook-form'
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {
  const {trigger,register,formState: {errors}} = useForm()
  const inputStyles =  `mt-5 p-2 w-full rounded-lg bg-primary-200 px-5 placeholder-white`
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if(!isValid){
      e.preventDefault()
    }
  }
  return (
    <div id={SelectedPage.ContactUs} className='mx-auto w-5/6 py-24'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        <motion.div className='md:w-3/5'
           initial='hidden' whileInView='visible' 
           viewport={{once:true, amount: 0.5}} 
           transition={{duration: 0.5}} 
           variants={{
               hidden: {opacity: 0, x: -100},
               visible: {opacity: 1, x: 0}
           }}>
            <HText><span className='text-primary-500'>JOIN NOW</span></HText>
            <p className='py-5'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus nostrum ipsa voluptatem 
              et itaque eius eligendi dolor, repudiandae delectus deserunt quasi
              modi sapiente! Dolor, qui.
            </p>
        </motion.div>
        <div className='mt-10 justify-between gap-8 md:flex'>
            <motion.div className='mt-10 basis-3/5 md:mt-0'  
                initial='hidden' whileInView='visible' 
                viewport={{once:true, amount: 0.5}} 
                transition={{duration: 0.5}} 
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0}
                }}>
                  <form 
                    target='_blank' onSubmit={onSubmit}
                    method='POST' action='https://formsubmit.co/008nurdan8@gmail.com'>
                      <input type="text"className={inputStyles}
                         placeholder='NAME' {...register('name', {required: true, maxLength: 100},)} />
                         {
                          errors.name && (
                            <p className='mt-1 text-primary-500'>
                              {errors.name.type === 'required' && 'This field is required'}
                              {errors.name.type === 'MaxLength' && 'MaxLength  is 100 char.'}
                            </p>
                          )
                         }
                      <input type="text"className={inputStyles}
                         placeholder='EMAIL' {...register('email', 
                         {
                          required: true, 
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                          },)} />
                         {
                          errors.email && (
                            <p className='mt-1 text-primary-500'>
                              {errors.email.type === 'required' && 'This field is required'}
                              {errors.email.type === 'pattern' && 'Invalid email address'}
                            </p>
                          )
                         }
                       <textarea className={inputStyles}
                        rows={4}
                        cols={50}

                         placeholder='MESSAGE' {...register('message', {required: true, maxLength: 100},)} /
                         >
                         {
                          errors.message && (
                            <p className='mt-1 text-primary-500'>
                              {errors.message.type === 'required' && 'This field is required'}
                              {errors.message.type === 'MaxLength' && 'MaxLength  is 200 char.'}
                            </p>
                          )
                         }
                         <button type='submit' className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>Send message</button>
                    </form>
            </motion.div>
            <motion.div className='relative mt-16  basis-3/5 md:mt-0' 
               initial='hidden' whileInView='visible' 
                viewport={{once:true, amount: 0.5}} 
                transition={{delay: 0.3, duration: 0.5}} 
                variants={{
                    hidden: {opacity: 0, x: -100},
                    visible: {opacity: 1, x: 0}
                }}> 
              <div className='
                md:before:content-evolvetext w-full 
                before:absolute before:-bottom-20 before:-right-10 
                before:z-[-1]'>
                  <img className='aspect-[2.67/2]  object-cover object-bottom'  src={ContactUsPageGraphic} alt="contact-us-page-graphic" />
              </div>
            </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactUs