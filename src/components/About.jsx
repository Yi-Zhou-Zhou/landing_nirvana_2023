import React, {useEffect, useRef} from 'react'
import { motion, useInView, useScroll } from 'framer-motion';
import nirvana1 from "../assets/images/nirvana1.png"
import useWindowDimensions from '../hooks/useWindowDimensions';
import feature1 from "../assets/images/feature1.png"
import feature2_1 from "../assets/images/feature2-1.png"
import feature2_2 from "../assets/images/feature2-2.png"
import feature2_dark from "../assets/images/feature2.gif"
import feature2_light from "../assets/images/feature2_light.gif"
import feature3 from "../assets/images/feature3.png"
import feature4 from "../assets/images/feature4_2.png"
import feature5 from "../assets/images/feature5.png"
import { ArrowRight } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

const About = ({currEl, setCurrEl, colorMode}) => {

  const firstRef = useRef(null)
  const firstIsInView = useInView(firstRef)
  const secondRef = useRef(null)
  const secondIsInView = useInView(secondRef)
  const thirdRef = useRef(null)
  const thirdIsInView = useInView(thirdRef)
  const fourthRef = useRef(null)
  const fourthIsInView = useInView(fourthRef)
  const fifthRef = useRef(null)
  const fifthIsInView = useInView(fifthRef)
  
  const { height, width } = useWindowDimensions();

  const { scrollYProgress } = useScroll();

  console.log("color mode is: ", colorMode)

  useEffect(() => {
    if (firstIsInView) {
      setCurrEl(firstRef)

    }

  }, [firstIsInView])

  useEffect(() => {
    if(secondIsInView){
      setCurrEl(secondRef)

    }
  }, [secondIsInView])

  useEffect(() => {
    if(thirdIsInView){
      setCurrEl(thirdRef)

    }
  }, [thirdIsInView])

  useEffect(() => {
    if(fourthIsInView){
      setCurrEl(fourthRef)

    }
  }, [fourthIsInView])
  
  useEffect(() => {
    if(fifthIsInView){
      setCurrEl(fifthRef)

    }
  }, [fifthIsInView])

  const textImgVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.5 }
  }
  
  const textPVariant = {
    visible: { translateY: "0px", opacity: 1},
    hidden: { translateY: "150px", opacity:0}
  }
  const textTagTransition = {
    duration:1,
    delay:0
  }
  const textTitleTransition = {
    duration:1,
    delay:0.2
  }
  const textDescriptionTransition = {
    duration:1,
    delay:0.4
  }
  const [t] = useTranslation("global")

  let body;
  if (width >= 768 && height >= 465){
    body = <section id='about' className=' md:gap-0' style={{scaleX: scrollYProgress}} >
    <motion.div ref={firstRef} className='relative' 
      animate={{
        height: currEl === firstRef ? "300vh" : "200vh",
      }}
      transition={{
        duration: 1
      }}>
      <div className='sm:sticky w-full h-screen top-0 flex  items-center sm:flex-row flex-col justify-center md:gap-24 gap-24 md:px-48 px-8 '> 
        <div className='flex flex-col  w-full'>
          <motion.div className='flex gap-4 flex-wrap '
           initial="hidden"
           whileInView="visible"
           variants={{
             hidden: { marginTop: "150px", opacity: 0},
             visible: {marginTop: "0px", opacity: 1}
            }}
           transition={textTagTransition}>
            <p className='bg-[#F72585] rounded-full font-semibold px-4 py-2 mb-4 w-fit'>Tag de prueba</p>

            <div className='bg-[#F72585] rounded-full font-semibold px-4 py-2 mb-4 w-fit'
           initial="hidden"
           whileInView="visible"
           variants={{
            hidden: { marginTop: "150px", opacity: 0},
            visible: {marginTop: "0px", opacity: 1}
           }}
           transition={{
            duration: 1,
            delay: 0.5
           }}
           >
            <button className='flex gap-2 items-center'>{t("applications.cta")}<ArrowRight size={18}/></button>
            
          </div>
          </motion.div>
         

          <motion.p className='text-5xl mb-8 dark:text-[#faf5e8] font-semibold text-black'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textTitleTransition}>{t("applications.title1")}
          </motion.p>

          <motion.p className='mb-8 dark:text-[#faf5e8] text-xl'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textDescriptionTransition}>{t("applications.description1")}
           </motion.p>

           
        </div>
        
        <motion.div className='sm:w-full  rounded-xl'
        initial="hidden"
        whileInView="visible"
        variants={textImgVariant}
        transition={{
          duration:1.5
        }}>
          
          <img src={feature1} alt="nirvana functionality"  className='rounded-xl dark:shadow-[0px_0px_20px_10px_#212a2b] shadow-[0px_0px_20px_10px_#999999]  '/>
        </motion.div>
      </div>
    </motion.div>

    <motion.div ref={secondRef} className='relative'
      animate={{
        height: currEl === secondRef ? "300vh" : "200vh",
      }}
      transition={{
        duration: 1
      }}>
      <div className='sm:sticky w-full h-screen top-0 flex  items-center sm:flex-row flex-col justify-center md:gap-24 gap-24 md:px-48 px-8  '> 
        <motion.div className='sm:w-full relative group  rounded-md group'
          initial="hidden"
          whileInView="visible"
          variants={textImgVariant}
          transition={{
            duration:1.5
          }}>
          
            <img src={colorMode === "dark" ? feature2_dark : feature2_light} alt="nirvana functionality"  className='rounded-xl dark:shadow-[0px_0px_20px_10px_#212a2b] shadow-[0px_0px_20px_10px_#d4d2d2]'/>
            <div>
            </div>
        </motion.div>
        <div className='flex flex-col  w-full'>
        <motion.div className='flex gap-4 flex-wrap '
           initial="hidden"
           whileInView="visible"
           variants={{
             hidden: { marginTop: "150px", opacity: 0},
             visible: {marginTop: "0px", opacity: 1}
            }}
           transition={textTagTransition}>
            <p className='bg-[#b5179e] rounded-full font-semibold px-4 py-2 mb-4 w-fit text-white'>Tag de prueba</p>

            <div className='bg-[#b5179e] rounded-full font-semibold px-4 py-2 mb-4 w-fit'
           initial="hidden"
           whileInView="visible"
           variants={{
            hidden: { marginTop: "150px", opacity: 0},
            visible: {marginTop: "0px", opacity: 1}
           }}
           transition={{
            duration: 1,
            delay: 0.5
           }}
           >
            <button className='flex gap-2 items-center text-white'>{t("applications.cta")}<ArrowRight size={18}/></button>
            
          </div>
          </motion.div>

          <motion.p className='text-5xl mb-8 dark:text-[#faf5e8] text-black font-semibold'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textTitleTransition}>{t("applications.title2")}
          </motion.p>

          <motion.p className='mb-8 dark:text-[#faf5e8] text-xl'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textDescriptionTransition}>{t("applications.description2")}
           </motion.p>

        </div>
        
        
      </div>
    </motion.div>

    <motion.div ref={thirdRef} className='relative'
      animate={{
        height: currEl === thirdRef ? "300vh" : "200vh",
      }}
      transition={{
        duration: 1
      }}>
      <div className='sm:sticky w-full h-screen top-0 flex  items-center sm:flex-row flex-col justify-center md:gap-24 gap-24 md:px-48 px-8 '> 
        <div className='flex flex-col  w-full'>
        <motion.div className='flex gap-4 flex-wrap '
           initial="hidden"
           whileInView="visible"
           variants={{
             hidden: { marginTop: "150px", opacity: 0},
             visible: {marginTop: "0px", opacity: 1}
            }}
           transition={textTagTransition}>
            <p className='bg-[#4361ee] rounded-full font-semibold px-4 py-2 mb-4 w-fit text-white'>Tag de prueba</p>

            <div className='bg-[#4361ee] rounded-full font-semibold px-4 py-2 mb-4 w-fit'
           initial="hidden"
           whileInView="visible"
           variants={{
            hidden: { marginTop: "150px", opacity: 0},
            visible: {marginTop: "0px", opacity: 1}
           }}
           transition={{
            duration: 1,
            delay: 0.5
           }}
           >
            <button className='flex gap-2 items-center text-white'>{t("applications.cta")}<ArrowRight size={18}/></button>
            
          </div>
          </motion.div>

          <motion.p className='text-5xl mb-8 dark:text-[#faf5e8] text-black font-semibold'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textTitleTransition}>{t("applications.title3")}
          </motion.p>

          <motion.p className='mb-8 dark:text-[#faf5e8] text-xl'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textDescriptionTransition}>{t("applications.description3")}
           </motion.p>

        </div>
        
        <motion.div className='sm:w-full'
        initial="hidden"
        whileInView="visible"
        variants={textImgVariant}
        transition={{
          duration:1.5
        }}>
        
          <img src={feature3} alt="nirvana functionality"  className='rounded-xl dark:shadow-[0px_0px_20px_10px_#212a2b] shadow-[0px_0px_20px_10px_#999999] '/>
        </motion.div>
      </div>
    </motion.div>

    <motion.div ref={fourthRef} className=' relative'
      animate={{
        height: currEl === fourthRef ? "300vh" : "200vh",
      }}
      transition={{
        duration: 1
      }}>
      <div className='sm:sticky w-full h-screen top-0 flex  items-center sm:flex-row flex-col justify-center md:gap-24 gap-24 md:px-48 px-8 '> 

      <motion.div className='sm:w-full'
        initial="hidden"
        whileInView="visible"
        variants={textImgVariant}
        transition={{
          duration:1.5
        }}>
        
          <img src={feature4} alt="nirvana functionality"  className='w-full rounded-xl'/>
        </motion.div>
        <div className='flex flex-col  w-full'>
        <motion.div className='flex gap-4 flex-wrap '
           initial="hidden"
           whileInView="visible"
           variants={{
             hidden: { marginTop: "150px", opacity: 0},
             visible: {marginTop: "0px", opacity: 1}
            }}
           transition={textTagTransition}>
            <p className='bg-[#3F37C9] rounded-full font-semibold px-4 py-2 mb-4 w-fit text-white'>Tag de prueba</p>

            <div className='bg-[#3F37C9] rounded-full font-semibold px-4 py-2 mb-4 w-fit'
           initial="hidden"
           whileInView="visible"
           variants={{
            hidden: { marginTop: "150px", opacity: 0},
            visible: {marginTop: "0px", opacity: 1}
           }}
           transition={{
            duration: 1,
            delay: 0.5
           }}
           >
            <button className='flex gap-2 items-center text-white'>{t("applications.cta")}<ArrowRight size={18}/></button>
            
          </div>
          </motion.div>

          <motion.p className='text-5xl mb-8 dark:text-[#faf5e8] text-black font-semibold'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textTitleTransition}>{t("applications.title4")}
          </motion.p>

          <motion.p className='mb-8 dark:text-[#faf5e8] text-xl'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textDescriptionTransition}>{t("applications.description4")}
           </motion.p>
        </div>
        
        
      </div>
    </motion.div>

    <motion.div ref={fifthRef} className=' relative'
      animate={{
        height: currEl === fifthRef ? "300vh" : "200vh",
      }}
      transition={{
        duration: 1
      }}>
      <div className='sm:sticky w-full h-screen top-0 flex  items-center sm:flex-row flex-col justify-center md:gap-24 gap-24 md:px-48 px-8 '> 
        <div className='flex flex-col  w-full'>
        <motion.div className='flex gap-4 flex-wrap '
           initial="hidden"
           whileInView="visible"
           variants={{
             hidden: { marginTop: "150px", opacity: 0},
             visible: {marginTop: "0px", opacity: 1}
            }}
           transition={textTagTransition}>
            <p className='bg-[#4895EF]  rounded-full font-semibold px-4 py-2 mb-4 w-fit'>Tag de prueba</p>

            <div className='bg-[#4895EF] rounded-full font-semibold px-4 py-2 mb-4 w-fit'
           initial="hidden"
           whileInView="visible"
           variants={{
            hidden: { marginTop: "150px", opacity: 0},
            visible: {marginTop: "0px", opacity: 1}
           }}
           transition={{
            duration: 1,
            delay: 0.5
           }}
           >
            <button className='flex gap-2 items-center'>{t("applications.cta")}<ArrowRight size={18}/></button>
            
          </div>
          </motion.div>

          <motion.p className='text-5xl mb-8 text-black dark:text-[#faf5e8] font-semibold'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textTitleTransition}>{t("applications.title5")}
          </motion.p>

          <motion.p className='mb-8 dark:text-[#faf5e8] text-xl'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textDescriptionTransition}>{t("applications.description5")}
           </motion.p>

        </div>
        
        <motion.div className='sm:w-full '
        initial="hidden"
        whileInView="visible"
        variants={textImgVariant}
        transition={{
          duration:1.5
        }}>
        
          <img src={feature5} alt="nirvana functionality"  className='dark:shadow-[0px_0px_20px_10px_#212a2b] shadow-[0px_0px_20px_10px_#999999] rounded-xl'/>
        </motion.div>
      </div>
    </motion.div>
</section>
  }
  /* Mobile/Tablet body */
  else{
      body = <section id='about' className=' md:gap-0 py-16 flex flex-col gap-16 ' >
      <div className='' ref={firstRef}>
        <div className='w-full flex  items-center sm:flex-row flex-col justify-center md:gap-24 gap-24 md:px-48 px-8 '> 
          <div className='flex flex-col w-full'>
            <div className='flex gap-4 flex-wrap mb-8'>
              <p className='bg-[#df02e3] rounded-full font-semibold px-4 py-2 w-fit '>Tag de prueba</p>
              <div className='bg-[#df02e3] w-fit px-4 py-2 font-semibold rounded-full '>
                <button className='flex gap-2'>{t("applications.cta")}<ArrowRight size={18}/></button>
              </div>
            </div>
  
            <p className='text-5xl mb-8 text-black dark:text-[#faf5e8] font-semibold '>{t("applications.title1")}</p>
  
            <p className=' dark:text-[#faf5e8] text-xl'>{t("applications.description1")}
            </p>

          </div>
          
          <div className='sm:w-full'>
            <img src={feature1} alt="nirvana functionality"  className='rounded-xl'/>
          </div>
        </div>
      </div>
  
      <div className='' ref={secondRef}>
        <div className='w-full flex  items-center sm:flex-row flex-col-reverse justify-center md:gap-24 gap-24 md:px-48 px-8 '> 

          <div className='sm:w-full '>
            <img src={nirvana1} alt="nirvana functionality"  className='rounded-xl'/>
          </div>
          <div className='flex flex-col  w-full'>
          <div className='flex gap-4 flex-wrap mb-8'>
              <p className='bg-[#df02e3] rounded-full font-semibold px-4 py-2 w-fit'>Tag de prueba</p>
              <div className='bg-[#df02e3] w-fit px-4 py-2 font-semibold rounded-full '>
                <button className='flex gap-2'>{t("applications.cta")}<ArrowRight size={18}/></button>
              </div>
            </div>
  
            <p className='text-5xl mb-8 text-black dark:text-[#faf5e8] font-semibold'>{t("applications.title2")}</p>
  
            <p className=' dark:text-[#faf5e8] text-xl'>{t("applications.description2")}
            </p>
          </div>
          
        </div>
      </div>
  
      <div className='' ref={thirdRef}>
        <div className='w-full flex  items-center sm:flex-row flex-col justify-center md:gap-24 gap-24 md:px-48 px-8 '> 
          <div className='flex flex-col  w-full'>
          <div className='flex gap-4 flex-wrap mb-8'>
              <p className='bg-[#df02e3] rounded-full font-semibold px-4 py-2 w-fit'>Tag de prueba</p>
              <div className='bg-[#df02e3] w-fit px-4 py-2 font-semibold rounded-full '>
                <button className='flex gap-2'>{t("applications.cta")}<ArrowRight size={18}/></button>
              </div>
            </div>
            <p className='text-5xl mb-8 text-black dark:text-[#faf5e8] font-semibold'>{t("applications.title3")}</p>
  
            <p className='dark:text-[#faf5e8]'>{t("applications.description3")}
            </p>
  
          </div>
          
          <div className='sm:w-full'>
            <img src={feature2_1} alt="nirvana functionality"  className='rounded-xl'/>
          </div>
        </div>
      </div>

      <div className='' ref={thirdRef}>
        <div className='w-full flex  items-center sm:flex-row flex-col justify-center md:gap-24 gap-24 md:px-48 px-8 '> 
          <div className='flex flex-col  w-full'>
          <div className='flex gap-4 flex-wrap mb-8'>
              <p className='bg-[#df02e3] rounded-full font-semibold px-4 py-2 w-fit'>Tag de prueba</p>
              <div className='bg-[#df02e3] w-fit px-4 py-2 font-semibold rounded-full '>
                <button className='flex gap-2'>{t("applications.cta")}<ArrowRight size={18}/></button>
              </div>
            </div>
            <p className='text-5xl mb-8 text-black dark:text-[#faf5e8] font-semibold'>{t("applications.title4")}</p>
  
            <p className='dark:text-[#faf5e8]'>{t("applications.description4")}
            </p>
  
          </div>
          
          <div className='sm:w-full'>
            <img src={feature2_1} alt="nirvana functionality"  className='rounded-xl'/>
          </div>
        </div>
      </div>

      <div className='' ref={thirdRef}>
        <div className='w-full flex  items-center sm:flex-row flex-col justify-center md:gap-24 gap-24 md:px-48 px-8 '> 
          <div className='flex flex-col  w-full'>
          <div className='flex gap-4 flex-wrap mb-8'>
              <p className='bg-[#df02e3] rounded-full font-semibold px-4 py-2 w-fit'>Tag de prueba</p>
              <div className='bg-[#df02e3] w-fit px-4 py-2 font-semibold rounded-full '>
                <button className='flex gap-2'>{t("applications.cta")}<ArrowRight size={18}/></button>
              </div>
            </div>
            <p className='text-5xl mb-8 text-black dark:text-[#faf5e8] font-semibold'>{t("applications.title5")}</p>
  
            <p className='dark:text-[#faf5e8]'>{t("applications.description5")}
            </p>
  
          </div>
          
          <div className='sm:w-full'>
            <img src={feature2_1} alt="nirvana functionality"  className='rounded-xl'/>
          </div>
        </div>
      </div>
  </section>
  }
  return (
    body
    
  )
}

export default About