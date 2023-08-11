import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/images/logo.png"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const Navbar = ({colorMode, setColorMode, scrollPosition}) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
    let themeButton;

	if (colorMode === 'light'){
        themeButton = <BsFillMoonFill size={28} className="cursor-pointer" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}/>
    }
    else{
        themeButton = <BsFillSunFill size={28} className="cursor-pointer" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}/>
    }

  return (
    <>
    <nav className={`fixed flex  ${scrollPosition >= 20 ? "mt-4 w-10/12 rounded-3xl left-2/4 -translate-x-2/4 border" : "left-0 border-none"} duration-1000 dark:bg-[#131819] dark:text-white justify-between items-center h-20 w-full px-4 text-black top-0 shadow-md -2 md:px-20  align-middle bg-white z-50`}>
      <a href="#home" className='h-3/6 md:h-4/6 flex items-center'>
        <img src={logo} alt="myfutureai_logo"  className="ml-4 h-5/6 w-full dark:brightness-0 dark:invert"/>

      </a>
      <ul className='hidden md:flex items-center gap-2'>
        <li className='p-4 text-xl font-bold' ><a href='#features'>Beneficios</a></li>
        <li className='p-4 text-xl font-bold'><a href='#about'>Aplicaciones</a></li>
        <li className='p-4 text-xl font-bold'><a href='#contact'>Contacto</a></li>
        
        
      </ul>

      <div className='hidden md:flex gap-4 items-center'>
        <button className='p-4 text-xl font-bold'>
          Login
        </button>
        {themeButton}

      </div>
      <div  className='block md:hidden flex items-center gap-4'>
          {nav ? <AiOutlineClose size={20} onClick={handleNav}/> : <AiOutlineMenu size={20} onClick={handleNav} />}
          {themeButton}
      </div>
      
    </nav>
    
    <ul className={nav ? 'fixed z-50 w-screen  h-screen  dark:bg-[#131819] bg-[#472E6D] text-white font-bold ease-in duration-500' : 'ease-in hidden duration-500 fixed -translate-y-100' }>
      <div className='mb-12'>
        <AiOutlineClose size={32} onClick={handleNav} className='absolute right-10 top-5'/>
      </div>
      <div className='px-12 sm:px-28 flex flex-col gap-4'>
        <li className='border-b py-4'><a href="#home" className='h-3/6 md:h-4/6' onClick={handleNav}>Home</a></li>
        <li className='border-b py-4'><a href='#features' onClick={handleNav}>Beneficios</a></li>
        <li className='border-b py-4'><a href='#about' onClick={handleNav}>Aplicaciones</a></li>
      </div>

      </ul>
    </>
  );
};

export default Navbar;