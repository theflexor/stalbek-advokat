import {useState} from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import Logo from  '@/assets/HomePageText.png'
import { Link } from './Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import {RiInstagramLine, RiWhatsappLine} from 'react-icons/ri'

type  Props = {
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void,
  isTopOfPage: boolean
}

 

export const Navbar = ({selectedPage,setSelectedPage,isTopOfPage}: Props) => {
  const flexBetween = 'flex items-center justify-between'
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
  return (
    <nav>
      <div className={` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="LOGO" />
         {
          isAboveMediumScreens ? ( 
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8`}>
              <Link page={SelectedPage.Home} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page={SelectedPage.Benefits} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page={SelectedPage.OurClasses} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page={SelectedPage.ContactUs} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
            <div className={`${flexBetween} gap-8`}>
              <a href='https://www.instagram.com/advokat.stalbek/' target='_blank'><RiInstagramLine size={20}/></a>
              <a href='https://api.whatsapp.com/send?phone=996702236900' target='_blank'><RiWhatsappLine size={20} /></a>
              <a href="tel:+996(702)236-900">+996(702)236-900</a>
              <ActionButton setSelectedPage={setSelectedPage} >Написать по почте</ActionButton>
            </div>
          </div>
          ) : (
          <button className='rounded-full bg-secondary-500 p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <Bars3Icon className='h-6 w-6 text-white'/>
          </button>
          )
         }
          </div>
        </div>
      </div>

      {
        !isAboveMediumScreens && isMenuToggled && (
          <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
            <div className='flex justify-end p-12'>
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon  className='h-6 w-6 text-gray-400' />
              </button>
            </div>
            <div className={`ml-[33%] flex flex-col gap-10 text-2xl `}>
            <Link page={SelectedPage.Home} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page={SelectedPage.Benefits} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page={SelectedPage.OurClasses} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page={SelectedPage.ContactUs} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
            <div className={`ml-[14%] ${flexBetween} flex-col  gap-3 mt-[40px]`}>
              <div className='flex gap-4'><a href='https://www.instagram.com/advokat.stalbek/' target='_blank'><RiInstagramLine size={20}/></a>
              <a href='https://api.whatsapp.com/send?phone=996702236900' target='_blank'><RiWhatsappLine size={20} /></a></div>
              <a href="tel:+996(702)236-900">+996(702)236-900</a>
            </div>
          </div>
        )
      }
    </nav>
  )
}
