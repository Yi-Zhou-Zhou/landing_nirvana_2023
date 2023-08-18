import React from 'react'
import { motion} from "framer-motion"
import { useTranslation } from 'react-i18next';
import { CaretRight } from '@phosphor-icons/react';

const Header = ({colorMode, featureIsVisible, svgInView, svgRef}) => {

  const [t] = useTranslation("global")

  return (
    <section id='home' className={`flex flex-col items-center justify-between w-full relative min-h-[calc(100vh-6rem)]  md:py-12 py-24 md:py-12 mb-12 px-10 md:px-24`}>
      <div className='flex flex-col items-start md:w-7/12 sm:py-24  '>
        <motion.svg width="350" height="200" className='mx-auto' viewBox="0 0 250 150" fill="none" xmlns="http://www.w3.org/2000/svg"  ref={svgRef}
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0},
          visible: {opacity:1}
         }}
         
         transition={{
          duration: 1
         }}>
              <g  clipPath="url(#clip0_626_6998)">
                <motion.path d="M125 122.1C129.142 122.1 132.5 118.742 132.5 114.6C132.5 110.458 129.142 107.1 125 107.1C120.858 107.1 117.5 110.458 117.5 114.6C117.5 118.742 120.858 122.1 125 122.1Z" stroke={colorMode === "dark" ? "white" : "black"} strokeWidth={8} fill={colorMode === "dark" ? "white" : "black"} initial={{ pathLength: 0 }} animate={{ pathLength: svgInView ? 1 : 0 }} transition={{ duration: 2 }}/>
                  <motion.path d="M84.9023 93.5C88.8023 90.9 93.1023 87.9 98.0023 87.9C102.102 88 105.802 90.4 107.802 93.7C111.502 99.6 108.902 108.8 101.602 111C97.4023 112.3 92.5023 110.5 90.5023 106.8" stroke={colorMode === "dark" ? "white" : "black"} strokeWidth={8} stroke-miterlimit="10" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: svgInView ? 1 : 0 }} transition={{ duration: 2 }}/>
                  <motion.path d="M85.1007 93.4C74.8007 100.5 63.2007 108.8 50.4007 102.1C40.3007 96.9 34.0007 84.5 37.0007 73.3C39.9007 62.4 50.7007 54.1 62.1007 57.2C71.8007 59.8 79.7007 70.7 73.8007 80.2C69.1007 88 56.4007 91 51.7007 81.5" stroke={colorMode === "dark" ? "white" : "black"} strokeWidth={8} stroke-miterlimit="10" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: svgInView ? 1 : 0 }} transition={{ duration: 2 }}/>
                  <motion.path d="M54.9023 87.5C59.0445 87.5 62.4023 84.1421 62.4023 80C62.4023 75.8579 59.0445 72.5 54.9023 72.5C50.7602 72.5 47.4023 75.8579 47.4023 80C47.4023 84.1421 50.7602 87.5 54.9023 87.5Z" stroke={colorMode === "dark" ? "white" : "black"} fill={colorMode === "dark" ? "white" : "black"} initial={{ pathLength: 0 }} animate={{ pathLength: svgInView ? 1 : 0 }} transition={{ duration: 2 }}/>
                  <motion.path d="M165.1 93.5C161.2 90.9 156.9 87.9 152 87.9C147.9 88 144.2 90.4 142.2 93.7C138.5 99.6 141.1 108.8 148.4 111C152.6 112.3 157.5 110.5 159.5 106.8" stroke={colorMode === "dark" ? "white" : "black"} strokeWidth={8} stroke-miterlimit="10" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: svgInView ? 1 : 0 }} transition={{ duration: 2 }}/>
                  <motion.path d="M164.898 93.4C175.198 100.5 186.798 108.8 199.598 102.1C209.698 96.8 215.998 84.5 212.998 73.3C210.098 62.4 199.298 54.1 187.898 57.2C178.198 59.8 170.298 70.7 176.198 80.2C180.998 88 193.698 90.9 198.398 81.4" stroke={colorMode === "dark" ? "white" : "black"} strokeWidth={8} stroke-miterlimit="10" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: svgInView ? 1 : 0 }} transition={{ duration: 2 }}/>
                  <motion.path d="M195.098 87.5C199.24 87.5 202.598 84.1421 202.598 80C202.598 75.8579 199.24 72.5 195.098 72.5C190.956 72.5 187.598 75.8579 187.598 80C187.598 84.1421 190.956 87.5 195.098 87.5Z" stroke={colorMode === "dark" ? "white" : "black"} fill={colorMode === "dark" ? "white" : "black"} initial={{ pathLength: 0 }} animate={{ pathLength: svgInView ? 1 : 0 }} transition={{ duration: 2 }}/>
                  <motion.path d="M125.003 43.9C121.103 34.3 113.203 27.7 102.503 27.9C92.1027 28.1 81.9027 34.5 78.8027 44.7C75.9027 53.9 79.0027 65 88.0027 69.6C95.4027 73.4 106.703 72.4 110.703 64.2C114.903 55.4 108.103 40.8 97.0027 44.7" stroke={colorMode === "dark" ? "white" : "black"} strokeWidth={8} stroke-miterlimit="10" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: svgInView ? 1 : 0 }} transition={{ duration: 2 }}/>
                  <motion.path d="M98.2031 55.4C102.345 55.4 105.703 52.0421 105.703 47.9C105.703 43.7579 102.345 40.4 98.2031 40.4C94.061 40.4 90.7031 43.7579 90.7031 47.9C90.7031 52.0421 94.061 55.4 98.2031 55.4Z" fill={colorMode === "dark" ? "white" : "black"} stroke={colorMode === "dark" ? "white" : "black"} initial={{ pathLength: 0 }} animate={{ pathLength: svgInView ? 1 : 0 }} transition={{ duration: 2 }}/>
                  <motion.path d="M125.004 43.9C128.904 34.3 136.804 27.7 147.504 27.9C157.904 28.1 168.104 34.5 171.204 44.7C174.104 53.9 171.004 65 162.004 69.6C154.604 73.4 143.304 72.4 139.304 64.2C135.104 55.4 141.904 40.8 153.004 44.7" stroke={colorMode === "dark" ? "white" : "black"} strokeWidth={8} stroke-miterlimit="10" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: svgInView ? 1 : 0 }} transition={{ duration: 2 }}/>
                  <motion.path d="M151.805 55.4C155.947 55.4 159.305 52.0421 159.305 47.9C159.305 43.7579 155.947 40.4 151.805 40.4C147.663 40.4 144.305 43.7579 144.305 47.9C144.305 52.0421 147.663 55.4 151.805 55.4Z" fill={colorMode === "dark" ? "white" : "black"} stroke={colorMode === "dark" ? "white" : "black"} initial={{ pathLength: 0 }} animate={{ pathLength: svgInView ? 1 : 0 }} transition={{ duration: 2 }}/>
              </g>
              <defs>
                  <clipPath id="clip0_626_6998">
                      <rect width="250" height="150" fill="white"/>
                  </clipPath>
              </defs>
          </motion.svg>
          <p className=' text-2xl dark:text-[#faf5e8] text-black mb-6 font-semibold '>{t("header.subtitle")}</p>
          <div className=' text-5xl sm:text-6xl dark:text-[#F72585] text-[#480CA8] font-bold mb-6'>
            
            <p>{t("header.title")}</p>
          </div>
          <p className='text-2xl dark:text-[#faf5e8] text-black inline-block mb-36 md:mb-0 w-full font-semibold'>{t("header.description")}</p>
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
          <CaretRight size={24}  className='group-hover:rotate-90 duration-700 dark:text-[#faf5e8] text-black'/>
          <button className='rounded-full dark:text-[#faf5e8] text-black font-bold'
        >
          {t("header.cta")}
        </button>
        </motion.div>
    </section>
    
  )
}

export default Header