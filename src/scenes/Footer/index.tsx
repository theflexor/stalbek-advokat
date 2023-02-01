import Logo from "@/assets/HomePageText.png";
import { AiOutlinePhone } from "react-icons/ai";
import { RiInstagramLine, RiWhatsappLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Я адвокат, я ничего не допускаю,  но <br /> у общественного мнения нет диплома юриста.
          </p>
          <p>© StalbekAdvo All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Адрес</h4>
          <p className="my-5">ул. Киевская, 62/1, Бишкек 720040</p>
          <p className="my-5">Et gravida id et etiam</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Контакты</h4>
          <p className="my-5">  <a className='flex  items-center gap-2' href="tel:+996(702)236-900"><AiOutlinePhone  size={20}/> +996(702)236-900</a></p>
          <p className="my-5"><a className='flex  items-center gap-2' href='https://www.instagram.com/advokat.stalbek/' target='_blank'><RiInstagramLine size={20}/>Instagram</a></p>
          <p className="my-5"><a className='flex  items-center gap-2' href='https://api.whatsapp.com/send?phone=996702236900' target='_blank'><RiWhatsappLine size={20} />Whatsapp</a></p>             
        </div>
      </div>
    </footer>
  );
};

export default Footer;