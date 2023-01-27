import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'

import { SelectedPage, TypeBenefit } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import Benefit from '../Benefit'
import HText from '@/shared/HText'

import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

const benefits: Array<TypeBenefit> = [
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: 'Семейное право:',
        description: `Расторжение брака.
        Взыскание алиментов.
        Перерасчёт алиментов.
        Порядок определения места жительства ребенка.
        Раздел имущества.
        Установление или оспаривание отцовства, материнства.`,
    },
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: 'Работа на результат',
        description: 'С высокой точностью оценим потенциальный успех судебного разбирательства.',
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "Результативность ",
        description: '97% - выигранных мной дел от поступивших.',
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "Результативность ",
        description: '97% - выигранных мной дел от поступивших.',
    }
]

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id={SelectedPage.Benefits} className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            <motion.div 
                initial='hidden'
                whileInView='visible'
                viewport={{once:true, amount: 0.5}} 
                transition={{duration: 0.5}} 
                variants={{
                    hidden: {opacity: 0, x: -100},
                    visible: {opacity: 1, x: 0}
                }} className='md:my-5 md:w-3/5'>
                <HText>Обо мне</HText>
                <p className='my-5 text-sm'>Профессионально оцениваем ситуацию, защищаем интересы, <br /> восстанавливаем нарушенные права.
                </p>
            </motion.div>
            <motion.div 
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.5}}
                variants={container}
                className='md:flex xl:flex-wrap items-center justify-between gap-8 mt-5 '>
                {
                    benefits.map((benefit) => (<Benefit key={benefit.title} {...benefit} setSelectedPage={setSelectedPage} />))
                }
            </motion.div>
        </motion.div>
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
            {/* img */}
            <img className='mx-auto w-3/6' src={BenefitsPageGraphic} alt="BenefitsPageGraphic" />
            
            {/* description */}
            <div>
                <div className='relative'>
                    <div className='before:absolute before:-top-20 before:-left-20 before:z-1 before:content-abstractwaves'>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once:true, amount: 0.5}} 
                            transition={{duration: 0.5}} 
                            variants={{
                                hidden: {opacity: 0, x: 50},
                                visible: {opacity: 1, x: 0}}}
                        >
                                <HText>
                                Обо  {'  '}
                                    <span className='text-primary-500'>мне</span>
                                </HText>
                        </motion.div>
                    </div>
                </div>

                <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.5}} 
                    transition={{delay:0.2,duration: 0.5}} 
                    variants={{
                        hidden: {opacity: 0, x: 50},
                        visible: {opacity: 1, x: 0}
                    }}>
                    <p className='my-5'>
                    Адвокат Купешев Сталбек — специалист с опытом работы более 22 лет, который даст консультацию о любой ситуации правового характера, выстроит эффективный план действий и поможет его реализовать. #юрист #адвокат #иск # заявление. Услуги: • правовой анализ действий, ситуаций, сделок, споров; • мирное урегулирование спора, составление и подача иска, представительство в судах, организация исполнительного производства; • анализ ситуаций, проектов, намерений, оформление договорённостей, составление документов, участие в переговорах, разрешение споров; • защита прав и представление интересов на стадии досудебного расследования и судебного разбирательства. </p>

                </motion.div>

                <div className='relative mt-16'>
                    <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Benefits