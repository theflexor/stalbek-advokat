import {motion} from 'framer-motion'

import { SelectedPage } from '@/shared/types'


import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import HomePageRedBull from '@/assets/SponsorRedBull.png'
import HomePageForbes from '@/assets/SponsorForbes.png'
import HomePageFortune from '@/assets/SponsorFortune.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HText from '@/shared/HText'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

    return (
    <section id={SelectedPage.Home} className='gap-16 bg-gray-20 py-10  md:h-full md:pb-0'>
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
                            <h1 className='text-[40px] font-bold'>Адвокат Бишкек Сталбек Купешев</h1>
                    </div>
                    <p className='mt-8 text-sm'>
                        Профессионально оцениваем ситуацию, защищаем интересы, восстанавливаем нарушенные права. 
                    </p>
                </motion.div>
                <motion.div className='mt-8 flex items-center gap-8'  initial='hidden' whileInView='visible' 
                viewport={{once:true, amount: 0.5}} 
                transition={{duration: 0.5}} 
                variants={{
                    hidden: {opacity: 0, x: -100},
                    visible: {opacity: 1, x: 0}
                }}>
                <ActionButton  setSelectedPage={setSelectedPage}>Join now</ActionButton>
                <AnchorLink 
                className='text-sm font-bold text-primary-500  underline hover:text-secondary-500'
                 onClick={() => setSelectedPage(SelectedPage.ContactUs)} 
                 href={`#${SelectedPage.ContactUs}`}
                 >
                    <p>Learn More</p>
                 </AnchorLink>
                </motion.div>
            </div>
            <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                <img src={HomePageGraphic} alt='home-image' className='rounded-lg'  />
                {/* IMAGE */}
            </div>
        </motion.div>        
        {isAboveMediumScreens ? (
                <div className='h-[150px] w-full  bg-primary-100 py-10'>
                    <div className='mx-auto w-5/6'>
                        <div className='flex w-3/5 items-center justify-between gap-8'>
                            <img src={HomePageRedBull} alt="RedBull-sponsor" />
                            <img src={HomePageForbes} alt="Forbes-sponsor" />
                            <img src={HomePageFortune} alt="Fortune-sponsor" />
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
    </section>
  )
}

export default Home