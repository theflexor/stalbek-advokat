 import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    title: string,
    description: string,
    icon: JSX.Element,
    setSelectedPage: (value:SelectedPage) => void
}

const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity: 1, scale: 1}
}

const Benefit = ({description,icon,setSelectedPage,title}: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className='mt-5 rounded-md border-2  border-gray-100 md:max-w-[48%] px-5 py-16 text-center'>
        <div className='mb-4 flex justify-center'>
            <div className=' border-gray-100 border-2 p-4 bg-primary rounded-full'>
                {icon}
            </div>
        </div>
            <h4 className='font-bold'>{title}</h4>
            <p className='my-3'>{description}</p>
            <AnchorLink className='text-sm font-bold text-primary-500  underline hover:text-secondary-500' onClick={() => setSelectedPage(SelectedPage.ContactUs)} 
                 href={`#${SelectedPage.ContactUs}`}><p>Обратиться</p></AnchorLink>
    </motion.div>  
  )
}

export default Benefit