import React from 'react'
import { AiOutlineAim, AiOutlineFieldTime, AiOutlineQuestionCircle } from 'react-icons/ai'
import { RiGhost2Line, RiQuestionAnswerLine } from 'react-icons/ri'

type Props = {}

const Advantages = (props: Props) => {
  return (
    <div className='w-full flex flex-wrap  bg-primary-100 py-15 py-10'>
    <div className='mx-auto w-5/6'>
        <div className='flex items-center flex-wrap  justify-center gap-8'>
            <div className='flex justify-center flex-col items-center text-center'>
            <AiOutlineAim size={40}/>
            <p>100% гарантия <br /> качества</p>
            </div>
            <div className='flex justify-center flex-col items-center text-center'>
            <AiOutlineQuestionCircle size={40}/>
            <p>Вопросы любой <br /> сложности</p>
            </div>
            <div className='flex justify-center flex-col items-center text-center'>
            <RiQuestionAnswerLine size={40}/>
            <p>Ответы на все <br /> вопросы</p>
            </div>
            <div className='flex justify-center flex-col items-center text-center'>
            <AiOutlineFieldTime size={40}/>
            <p>Экономим ваше  <br /> время</p>
            </div>
            <div className='flex justify-around flex-col items-center text-center'>
            <RiGhost2Line size={40}/>
            <p>Конфиденциальность<br /></p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Advantages