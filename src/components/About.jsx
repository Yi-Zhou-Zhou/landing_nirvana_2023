import React, {useEffect, useRef, useState} from 'react'
import { motion, useInView, useScroll,MotionConfig, AnimatePresence } from 'framer-motion';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { ArrowRight } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

const About = ({currEl, setCurrEl, colorMode, lang}) => {

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

  const [images, setImages] = useState([])


  const [selectedImage, setSelectedImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedImage === 3) {
        setSelectedImage(0);
        return;
      }
      setSelectedImage((prevValue) => {
        if (prevValue === 3) {
          return 0;
        }
        return prevValue + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [])
  
  const variants = {
    hidden: {display: "none", opacity: 0},
    visible: {display: "block", opacity: 1},
    exiting: {display: "none", opacity:0}
  }; 

  useEffect(() => {
    let newImgs;
    if (colorMode === "dark"){
      const image1 = `https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/compare_1_${lang}.png`
      const image2 = `https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/compare_2_${lang}.png`
      const image3 = `https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/compare_3_${lang}.png`
      const image4 = `https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/compare_4_${lang}.png`
      newImgs = [image1,image2,image3,image4]
    }
    else{
      const image1 = `https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/compare_1_${lang}_L.png`
      const image2 = `https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/compare_2_${lang}_L.png`
      const image3 = `https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/compare_3_${lang}_L.png`
      const image4 = `https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/compare_4_${lang}_L.png`
      newImgs = [image1,image2,image3,image4]
    }
    setImages(newImgs)
  }, [lang, colorMode])
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

  if (width > 1000 && height >= 465){
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
            <p className='bg-[#F72585] text-white rounded-full font-semibold px-4 py-2 mb-4 w-fit ' >{t("applications.tag1")}</p>

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
            <a href='#contact' aria-label='contact' className='flex gap-2 items-center text-white'>{t("applications.cta")}<ArrowRight size={18}/></a>
            
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
          
          <img src={`https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/persistent_data_${colorMode}_${lang}.png`} alt="nirvana functionality"  className='rounded-xl  '/>
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
          
            <img src={`https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/gif_load_${lang}_${colorMode}.gif`} alt="nirvana functionality"  className='rounded-xl dark:shadow-[0px_0px_20px_10px_#212a2b] shadow-[0px_0px_20px_10px_#d4d2d2]'/>
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
            <p className='bg-[#b5179e]  rounded-full font-semibold px-4 py-2 mb-4 w-fit text-white'>{t("applications.tag2")}</p>

            <div className='bg-[#b5179e] rounded-full font-semibold px-4 py-2 mb-4 w-fit'>
            <a href='#contact' aria-label='contact' className='flex gap-2 items-center text-white'>{t("applications.cta")}<ArrowRight size={18}/></a>
            
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
            <p className='bg-[#4361ee] rounded-full font-semibold px-4 py-2 mb-4 w-fit text-white'>{t("applications.tag3")}</p>

            <div className='bg-[#4361ee] rounded-full font-semibold px-4 py-2 mb-4 w-fit'
           >
            <a href='#contact' aria-label='contact' className='flex gap-2 items-center text-white'>{t("applications.cta")}<ArrowRight size={18}/></a>
            
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
        
          <img src={`https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/chat_colaborative_${colorMode}_${lang}.png`} alt="nirvana functionality"  className='rounded-xl  '/>
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
        
          <img src={`https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/extension_${colorMode}_${lang}.png`} alt="nirvana functionality"  className='w-full rounded-xl'/>
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
            <p className='bg-[#3F37C9] rounded-full font-semibold px-4 py-2 mb-4 w-fit text-white'>{t("applications.tag4")}</p>

            <div className='bg-[#3F37C9] rounded-full font-semibold px-4 py-2 mb-4 w-fit'
           >
            <a href='#contact' aria-label='contact' className='flex gap-2 items-center text-white'>{t("applications.cta")}<ArrowRight size={18}/></a>
            
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
            <p className='bg-[#4895EF]  rounded-full font-semibold px-4 py-2 mb-4 w-fit text-white'>{t("applications.tag5")}</p>

            <div className='bg-[#4895EF] rounded-full font-semibold px-4 py-2 mb-4 w-fit'
           
           >
            <a href='#contact' aria-label='contact' className='flex gap-2 items-center text-white'>{t("applications.cta")}<ArrowRight size={18}/></a>
            
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
        }}
        >
            <motion.img
              key={images[selectedImage]}
              initial="hidden"
              animate="visible"
              exit="exiting"
              variants={variants}
              src={images[selectedImage]}
              alt="nirvana functionality"
              transition={{
                duration: 3
              }}
            />

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
              <p className='bg-[#df02e3] rounded-full font-semibold px-4 py-2 w-fit text-white '>{t("applications.tag1")}</p>
              <div className='bg-[#df02e3] w-fit px-4 py-2 font-semibold rounded-full '>
              <a href='#contact' aria-label='contact' className='flex gap-2 items-center text-white'>{t("applications.cta")}<ArrowRight size={18}/></a>
              </div>
            </div>
  
            <p className='text-5xl mb-8 text-black dark:text-[#faf5e8] font-semibold '>{t("applications.title1")}</p>
  
            <p className=' dark:text-[#faf5e8] text-xl'>{t("applications.description1")}
            </p>

          </div>
          
          <div className='sm:w-full'>
            <img src={`https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/persistent_data_${colorMode}_${lang}.png`} alt="nirvana functionality"  className='rounded-xl'/>
          </div>
        </div>
      </div>
  
      <div className='' ref={secondRef}>
        <div className='w-full flex  items-center sm:flex-row flex-col-reverse justify-center md:gap-24 gap-24 md:px-48 px-8 '> 

          <div className='sm:w-full '>
            <img src={`https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/gif_load_${lang}_${colorMode}.gif`} alt="nirvana functionality"  className='rounded-xl'/>
          </div>
          <div className='flex flex-col  w-full'>
          <div className='flex gap-4 flex-wrap mb-8'>
              <p className='bg-[#df02e3] rounded-full font-semibold px-4 py-2 w-fit text-white'>{t("applications.tag2")}</p>
              <div className='bg-[#df02e3] w-fit px-4 py-2 font-semibold rounded-full '>
              <a href='#contact' aria-label='contact' className='flex gap-2 items-center text-white'>{t("applications.cta")}<ArrowRight size={18}/></a>
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
              <p className='bg-[#df02e3] rounded-full font-semibold px-4 py-2 w-fit text-white'>{t("applications.tag3")}</p>
              <div className='bg-[#df02e3] w-fit px-4 py-2 font-semibold rounded-full '>
              <a href='#contact' aria-label='contact' className='flex gap-2 items-center text-white'>{t("applications.cta")}<ArrowRight size={18}/></a>
              </div>
            </div>
            <p className='text-5xl mb-8 text-black dark:text-[#faf5e8] font-semibold'>{t("applications.title3")}</p>
  
            <p className='dark:text-[#faf5e8]'>{t("applications.description3")}
            </p>
  
          </div>
          
          <div className='sm:w-full'>
            <img src={`https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/chat_colaborative_${colorMode}_${lang}.png`} alt="nirvana functionality"  className='rounded-xl'/>
          </div>
        </div>
      </div>

      <div className='' ref={thirdRef}>
        <div className='w-full flex  items-center sm:flex-row flex-col-reverse justify-center md:gap-24 gap-24 md:px-48 px-8 '> 
        <div className='sm:w-full'>
            <img src={`https://nirvana-public.s3.us-west-2.amazonaws.com/landing/src/assets/extension_${colorMode}_${lang}.png`} alt="nirvana functionality"  className='rounded-xl'/>
          </div>
          <div className='flex flex-col  w-full'>
          <div className='flex gap-4 flex-wrap mb-8'>
              <p className='bg-[#df02e3] rounded-full font-semibold px-4 py-2 w-fit text-white'>{t("applications.tag4")}</p>
              <div className='bg-[#df02e3] w-fit px-4 py-2 font-semibold rounded-full '>
              <a href='#contact' aria-label='contact' className='flex gap-2 items-center text-white'>{t("applications.cta")}<ArrowRight size={18}/></a>
              </div>
            </div>
            <p className='text-5xl mb-8 text-black dark:text-[#faf5e8] font-semibold'>{t("applications.title4")}</p>
  
            <p className='dark:text-[#faf5e8]'>{t("applications.description4")}
            </p>
  
          </div>
          
          
        </div>
      </div>

      <div className='' ref={thirdRef}>
        <div className='w-full flex  items-center sm:flex-row flex-col justify-center md:gap-24 gap-24 md:px-48 px-8 '> 
          <div className='flex flex-col  w-full'>
          <div className='flex gap-4 flex-wrap mb-8'>
              <p className='bg-[#df02e3] rounded-full font-semibold px-4 py-2 w-fit text-white'>{t("applications.tag5")}</p>
              <div className='bg-[#df02e3] w-fit px-4 py-2 font-semibold rounded-full '>
              <a href='#contact' aria-label='contact' className='flex gap-2 items-center text-white'>{t("applications.cta")}<ArrowRight size={18}/></a>
              </div>
            </div>
            <p className='text-5xl mb-8 text-black dark:text-[#faf5e8] font-semibold'>{t("applications.title5")}</p>
  
            <p className='dark:text-[#faf5e8]'>{t("applications.description5")}
            </p>
  
          </div>
          
          <motion.div className='sm:w-full '
        initial="hidden"
        whileInView="visible"
        variants={textImgVariant}
        transition={{
          duration:1.5
        }}
        >
            <motion.img
              key={images[selectedImage]}
              initial="hidden"
              animate="visible"
              exit="exiting"
              variants={variants}
              src={images[selectedImage]}
              alt="src"
              transition={{
                duration: 3
              }}
            />
        </motion.div>
        </div>
      </div>
  </section>
  }
  return (
    body
    
  )
}

export default About