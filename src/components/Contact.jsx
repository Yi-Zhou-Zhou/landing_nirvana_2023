import React from 'react'
import { motion } from 'framer-motion'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { useTranslation } from 'react-i18next';
const Contact = () => {
  const { height, width } = useWindowDimensions();
  
  const moveToRight = {
    hidden: {translateX: width >= 600 ? "-600px" : "-300px"},
    visible: {translateX: "0px"}
  }

  const moveToTop = {
    hidden: {translateY: "100vh"},
    visible: {translateY: "0"}
  }

  const [t] = useTranslation("global")
  return (
    <motion.section id='contact' className='section flex py-20 bg-[#091455]  flex-wrap px-8 md:px-48 xs:gap-8 sm:gap-16  w-screen overflow-hidden'
      initial="hidden"
      whileInView="visible"
      variants={moveToRight}
      transition={{
        duration: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.8
      }}
    >
      <motion.div className=' mb-12 '
        variants={{
          hidden: {translateX:  "-200vw"},
          visible: {translateX: "0vw"}
        }}
        transition={{
          duration: 1
        }}
      >
          <p className='text-4xl w-fit text-white'>{t("contact.title")}</p>
          <p className='text-4xl font-bold w-fit text-[#F72585] underline'>Nirvana-AI</p>
      </motion.div>
        
      <motion.form class="grow flex flex-col gap-16">

        <motion.div className='flex flex-wrap justify-between'
        variants={moveToTop}
        transition={{
          duration: 1
        }}
        >
          <div class="relative z-0 w-5/12">
            <input type="text" id="name" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-white  duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("contact.input1")}</label>
          </div>
          <div class="relative z-0 w-5/12">
            <input type="text" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("contact.input2")}</label>
          </div>
        </motion.div>
        
        <motion.div className='flex flex-wrap  justify-between'
        variants={moveToTop}
        transition={{
          duration: 1
        }}>
          <div class="relative z-0 w-5/12">
            <input type="text" id="phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("contact.input3")}</label>
          </div>
          <div class="relative z-0 w-5/12">
            <input type="text" id="message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("contact.input4")}</label>
          </div>
        </motion.div>
        <motion.button className='bg-[#F72585] text-white w-fit px-4 py-2 text-xl self-end rounded-full'
        variants={moveToTop}
        transition={{
          duration: 1
        }}>{t("contact.cta")}</motion.button>
      </motion.form>
    </motion.section>
  )
}

export default Contact