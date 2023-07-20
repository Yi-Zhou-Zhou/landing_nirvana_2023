import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/images/logo.png"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const Navbar = ({colorMode, setColorMode}) => {
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
    <nav className='flex dark:bg-[#131819] dark:text-white justify-between items-center h-24 w-full px-4 text-black left-0 top-0 shadow-md md:px-20 pr-8 align-middle bg-white z-50 align-middle'>
      <a href="#home" className='h-3/6 md:h-4/6 flex items-center'>
        <img src={logo} alt="myfutureai_logo"  className="ml-4 h-5/6 w-full dark:brightness-0 dark:invert"/>

      </a>
      <ul className='hidden md:flex items-center gap-2'>
        <li className='p-4 text-xl font-bold' ><a href='#features'>Beneficios</a></li>
        <li className='p-4 text-xl font-bold'><a href='#about'>Aplicaciones</a></li>
        {themeButton}
        
      </ul>
      <div  className='block md:hidden flex items-center gap-4'>
          {nav ? <AiOutlineClose size={20} onClick={handleNav}/> : <AiOutlineMenu size={20} onClick={handleNav} />}
          {themeButton}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 z-40 w-[60%] h-full  dark:bg-[#B12463] bg-[#472E6D] text-white font-bold ease-in duration-500' : 'ease-in duration-500 fixed left-[-100%] '}>
          <li className='p-4'><a href="#home" className='h-3/6 md:h-4/6'>Home</a></li>
          <li className='p-4'><a href='#features'>Beneficios</a></li>
          <li className='p-4'><a href='#about'>Aplicaciones</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;