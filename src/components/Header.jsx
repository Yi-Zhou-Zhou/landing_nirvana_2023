import React from 'react'

import { TypeAnimation } from 'react-type-animation';
import {IoIosArrowForward} from "react-icons/io";
import { motion } from "framer-motion"
const Header = ({colorMode, featureIsVisible}) => {

  return (
    <header id='home' className={`flex flex-col items-center justify-between w-full dark:bg-[#131819] relative min-h-[calc(100vh-6rem)] md:py-12 py-12 mb-12 px-10 md:px-24  `}>
      <div className='flex flex-col items-start md:w-7/12 sm:py-24  '>
          <p className=' text-2xl text-white mb-6 '>Lorem ipsum dolor sit</p>
          <div className=' text-5xl sm:text-6xl text-[#F72585] font-bold mb-6'>
            
            <p>Acede a todo el poder de múltiples herramientas AI desde una simple conversación</p>
          </div>
          <p className='text-2xl text-white inline-block mb-36 md:mb-0 w-full '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <motion.div className='hover:cursor-pointer font-bold  flex  group'
        initial={{
          y:0
        }}
        animate={{
          opacity: featureIsVisible ?  0 : 1,
          y: ["0rem", "-0.1rem", "0rem"]
        }}
        
        transition={{
          y: {
            duration: 0.5,
            repeat: Infinity,
            repeatDelay:0
          }
        }}>
          <IoIosArrowForward size={24} color='white' className='group-hover:rotate-90 duration-700'/>
          <button className='rounded-full text-white'
        >
          ¡Empieza ahora!
        </button>
        </motion.div>
    </header>
    
  )
}

export default Header