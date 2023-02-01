import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'

import { SelectedPage, TypeBenefit } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import Benefit from '../Benefit'
import HText from '@/shared/HText'

import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import { AiFillCar,AiOutlineFileProtect } from 'react-icons/ai'
import { BsBuilding } from 'react-icons/bs'

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
        icon: <AiFillCar className='h-6 w-6' />,
        title: 'Автоюрист',
        description: `Взыскание ущерба в результате ДТП, у виновного в ДТП нет страховки, страховая компания отказывается выплачивать возмещение, виновный в ДТП покинул место происшествия, взыскание с виновника утраты товарно-материальной стоимости, оспаривание оценки (отчета об оценке ущерба).`,
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: 'Семейный юрист',
        description: 'Расторжение брака через суд (развод), взыскание алиментов, брачный договор, раздел имущества через суд, совместная собственность, порядок общение с детьми после развода, определение места жительства детей через суд, уменьшение размере алиментов, лишение родительских прав, опекунство и попечительства, признание через суд человека недееспособным, восстановление родительских прав.',
    },
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "Земельный юрист ",
        description: 'Получение земельного участка от государства, землепользование, определение размера аренды земельного участка, предоставление земельного участка, обжалование решения земельной комиссии, строительство жилого дома на земельном участке, изменение целевого назначения земельного участка, порядок приватизации земельного участка, изъятие земельного участка для нужд государства.',
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "Жилищный юрист",
        description: 'Получение жилья от государства, приватизация государственного жилья (квартиры, дома), пользование общим жильем (общая собственность), определение доли от общего имущества через суд, ветхое жилье, аварийное жилье, долевое участие в строительстве жилья (ДДУ), выселение, вселение, изменение целевого назначения жилья на нежилое, перепланировка и переоборудование жилья.',
    },
    {
        icon: <AiOutlineFileProtect className='h-6 w-6' />,
        title: "Юрист по защите прав",
        description: 'Регистрация объектов авторского права, обжалование регистрации объектов авторского права в суде, защита имущественных авторских прав, взыскание компенсации по нарушенным авторским правам, восстановление нарушенных авторских прав через суд, юридические последствие нарушенных авторских прав.',
    }, 
    {
        icon: <BsBuilding className='h-6 w-6' />,
        title: "Строительный юрист",
        description: 'Споры со строительными компаниями по договору долевого участия (ДДУ), взыскание неустойки (пени) по ДДУ, выход из членов кооператива (ЖСК), споры по неисполнению или надлежащему исполнению договора (ДДУ), нарушение сроков сдачи дома, возврат средств от застройщиков, не исполняющих договор.',
    },
]

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id={SelectedPage.Benefits} className='mx-auto min-h-full w-5/6 py-11 my-10'>
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
                <HText>Основные направление</HText>
                <p className='my-5 text-sm'>Профессионально оцениваем ситуацию, защищаем интересы, <br /> восстанавливаем нарушенные права.
                </p>
            </motion.div>
            <motion.div 
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
                variants={container}
                className='md:flex flex-wrap items-center justify-between gap-8 mt-5 '>
                {
                    benefits.map((benefit) => (<Benefit key={benefit.title} {...benefit} setSelectedPage={setSelectedPage} />))
                }
            </motion.div>
        </motion.div>
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
            {/* img */}
            <img className='mx-auto md:w-3/6' src={BenefitsPageGraphic} alt="BenefitsPageGraphic" />
            
            {/* description */}
            <div className='mt-8'>
                <div className='relative'>
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


            </div>
        </div>
    </section>
  )
}

export default Benefits