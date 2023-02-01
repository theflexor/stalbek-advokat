import React from 'react'
import { motion } from 'framer-motion'
import { SelectedPage } from '@/shared/types'
import { ClassType } from '@/shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/im3.jpg'
import image4 from '@/assets/im6.jpg'
import image5 from '@/assets/im5.jpg'
import image6 from '@/assets/im7.jpg'
import HText from '@/shared/HText'
import Class from './Class'


type Props = {
    setSelectedPage: (value:SelectedPage) => void
}

const classes: Array<ClassType> = [
    // {
    //     name: "Сертификаты",
    //     name: "Сертификаты",
    //     image: image1,
    //   },
    //   {
    //     image: image2,
    //   },
      {
        name: "Сертификаты",
        image: image3,
      },
      {
        name: "Сертификаты",
        image: image4,
      },
      {
        name: "Сертификаты",
        image: image5,
      },
      {
        name: "Сертификаты",
        image: image6,
      },
]
const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id={SelectedPage.OurClasses} className='w-full bg-primary-100 py-40'>
         <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div className='mx-auto w-5/6'
                 initial='hidden'
                whileInView='visible'
                viewport={{once:true, amount: 0.5}} 
                transition={{duration: 0.5}} 
                variants={{
                    hidden: {opacity: 0, x: -100},
                    visible: {opacity: 1, x: 0}
                }}>
                    <div className='md:w-3/5'>
                        <HText>Дополнительно</HText>
                        <p className='py-5 '>
                        Цивилизация привела к тому, что уже не важно, кто прав, <br /> а кто не прав; важно, чей адвокат лучше.
                        </p>
                    </div>
            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {
                        classes.map((item,i) => <Class key={`${item.name + '' + i}`} {...item} />)
                    }
                </ul>
            </div>
         </motion.div>
    </section>
  )
}

export default OurClasses