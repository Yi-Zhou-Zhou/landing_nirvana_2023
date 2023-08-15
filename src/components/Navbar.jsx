import React, { useEffect, useState } from 'react';
import { List, X, Moon, Sun, Globe } from '@phosphor-icons/react';
import logo from "../assets/images/logo.png"
import { useTranslation } from 'react-i18next';

const Navbar = ({colorMode, setColorMode, scrollPosition, setLang, lang}) => {
  const [nav, setNav] = useState(false);
  
  const [t, i18n] = useTranslation("global")
  const handleNav = () => {
    setNav(!nav);
  };


  let themeButton;
	if (colorMode === 'light'){
        themeButton = <Moon size={28} className="cursor-pointer" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}/>
    }
    else{
        themeButton = <Sun size={28} className="cursor-pointer" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}/>
    }

  return (
    <>
    <nav className={`fixed flex glass-navbar border-none  ${scrollPosition >= 20 ? "mt-4 w-10/12 rounded-3xl left-2/4 -translate-x-2/4" : " left-0 right-0"} duration-700 dark:text-white justify-between items-center h-20 w-full px-4 text-black top-0 shadow-md -2 md:px-20  align-middle  z-50`}>
      <a href="#home" className='h-3/6 md:h-4/6 flex items-center'>
        <img src={logo} alt="myfutureai_logo"  className="ml-4 h-5/6 w-full dark:brightness-0 dark:invert"/>

      </a>
      <ul className='hidden md:flex items-center gap-8'>
        <li className='text-xl font-bold' ><a href='#features'>{t("navbar.benefits")}</a></li>
        <li className='text-xl font-bold'><a href='#about'>{t("navbar.applications")}</a></li>
        <li className='text-xl font-bold'><a href='#contact'>{t("navbar.contact")}</a></li>
        
        
      </ul>

      <div className='hidden md:flex gap-8 items-center'>
        <button className='text-xl font-bold'>{t("navbar.login")}</button>
        {themeButton}
        <div className='flex gap-1 items-center cursor-pointer' onClick={() => lang === "es" ? setLang("en") : setLang("es")}>
          <Globe size={28}/>
          <p className='text-xl font-bold'>{lang.toLocaleUpperCase()}</p>
        </div>

      </div>
      <div  className='block md:hidden flex items-center gap-4'>
          {nav ? <X size={20} onClick={handleNav}/> : <List size={20} onClick={handleNav} />}
          {themeButton}
      </div>
      
    </nav>
    
    <ul className={nav ? 'fixed z-50 w-screen  h-screen  dark:bg-[#131819] bg-[#472E6D] text-white font-bold ease-in duration-500' : 'ease-in hidden duration-500 fixed -translate-y-100' }>
      <div className='mb-12'>
        <X size={32} onClick={handleNav} className='absolute right-10 top-5'/>
      </div>
      <div className='px-12 sm:px-28 flex flex-col gap-4 text-md'>
        <li className='border-b py-4'><a href="#home" className='h-3/6 md:h-4/6' onClick={handleNav}>Home</a></li>
        <li className='border-b py-4'><a href='#features' onClick={handleNav}>Beneficios</a></li>
        <li className='border-b py-4'><a href='#about' onClick={handleNav}>Aplicaciones</a></li>
        <li className='border-b py-4'>
          <div className='flex gap-1 items-center cursor-pointer' onClick={() => {
            if (lang === "es"){
              setLang("en")
            }
            else{
              setLang("es")
            }
            setNav(false)
          }}>
            <Globe size={28}/>
            <p className=''>{lang.toLocaleUpperCase()}</p>
          </div>
        </li>
      </div>

      </ul>
    </>
  );
};

export default Navbar;