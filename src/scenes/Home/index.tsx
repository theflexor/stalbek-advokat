import {motion} from 'framer-motion'

import { SelectedPage } from '@/shared/types'


import HomePageGraphic from '@/assets/HomePageGraphic.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import {AiOutlineAim,AiOutlineQuestionCircle,AiOutlineFieldTime} from 'react-icons/ai'
import ActionButton from '@/shared/ActionButton'

import {RiQuestionAnswerLine,RiGhost2Line, RiWhatsappLine,} from 'react-icons/ri'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

    return (
    <section id={SelectedPage.Home} className='gap-16 bg-gray-20 py-10  md:h-full sm:h-auto md:pb-0'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)} className='md:flex mx-auto w-5/6 items-center justify-center  md:h-5/6'>
            {/* MAIN HEADER */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* HEADER */}
                <motion.div className='md:-mt-20' initial='hidden' whileInView='visible' 
                viewport={{once:true, amount: 0.5}} 
                transition={{duration: 0.5}} 
                variants={{
                    hidden: {opacity: 0, x: -100},
                    visible: {opacity: 1, x: 0}
                }}>
                    <div className='relative'>
                            <h1 className='md:text-[40px] text-[30px] font-bold'>Адвокат Бишкек Сталбек Купешев</h1>
                    </div>
                    <p className='mt-8 '>
                    Если факты на твоей стороне — бей фактами. Если закон на твоей стороне — бей законом. Если на твоей стороне ни фактов, ни закона — бей кулаком по столу. 
                    </p>
                </motion.div>
                <motion.div className='mt-8 flex items-center gap-8'  initial='hidden' whileInView='visible' 
                viewport={{once:true, amount: 0.5}} 
                transition={{duration: 0.5}} 
                variants={{
                    hidden: {opacity: 0, x: -100},
                    visible: {opacity: 1, x: 0}
                }}>
                    <a href="tel:+996(702)236-900">+996(702)236-900</a>          
                    <a href='https://api.whatsapp.com/send?phone=996702236900' className='flex items-center gap-2' target='_blank'><RiWhatsappLine size={30} /> Whatsapp</a>

                </motion.div>
                <motion.div className='mt-6 flex items-center gap-8'  initial='hidden' whileInView='visible' 
                viewport={{once:true, amount: 0.5}} 
                transition={{duration: 0.5}} 
                variants={{
                    hidden: {opacity: 0, x: -100},
                    visible: {opacity: 1, x: 0}
                }}>
                    <ActionButton setSelectedPage={setSelectedPage}>Написать по почте</ActionButton>
                </motion.div>
            </div>
            <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 mt-16 md:justify-items-end'>
                <img src={HomePageGraphic} alt='home-image' className='rounded-lg'  />
                {/* IMAGE */}
            </div>
        </motion.div>        
    </section>
  )
}

export default Home 