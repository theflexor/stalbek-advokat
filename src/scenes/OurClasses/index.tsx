import React from 'react'
import { motion } from 'framer-motion'
import { SelectedPage } from '@/shared/types'
import { ClassType } from '@/shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import HText from '@/shared/HText'
import Class from './Class'


type Props = {
    setSelectedPage: (value:SelectedPage) => void
}

const classes: Array<ClassType> = [
    {
        name: "Представительство в суде",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image1,
      },
      {
        name: "Семейные споры",
        description: "Расторжение брака. Взыскание алиментов. <br> Перерасчёт алиментов. Порядок определения места жительства ребенка. Раздел имущества. Установление или оспаривание отцовства, материнства.",
        image: image2,
      },
      {
        name: "Наследство",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image3,
      },
      {
        name: "Защита чести и достоинства",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image4,
      },
      {
        name: "Имущественные споры",
        image: image5,
      },
      {
        name: "Административные споры",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
                        <HText>OurClasses</HText>
                        <p className='py-5 '>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Possimus quisquam temporibus 
                            laboriosam quam est, assumenda, alias ipsam voluptatem 
                            eveniet veniam placeat? Quo, quas quia!
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