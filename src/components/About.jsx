import React, {useEffect, useRef} from 'react'
import { motion, useInView, useScroll } from 'framer-motion';
import nirvana1 from "../assets/images/nirvana1.png"
import useWindowDimensions from '../hooks/useWindowDimensions';
import feature1 from "../assets/images/feature1.png"
import feature2_1 from "../assets/images/feature2-1.png"
import feature2_2 from "../assets/images/feature2-2.png"
import feature3 from "../assets/images/feature3.png"
import feature4 from "../assets/images/feature4.png"
import feature5 from "../assets/images/feature5.png"
import { ArrowRight } from 'phosphor-react';

const About = ({currEl, setCurrEl}) => {

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

  console.log(fifthIsInView)

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

  const buttonRef = useRef(null)
  const buttonIsInView = useInView(buttonRef)

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
            <button className='flex gap-2 items-center'>Ir a Nirvana <ArrowRight size={18}/></button>
            
          </div>
          </motion.div>
         

          <motion.p className='text-5xl mb-8 text-[#faf5e8] font-semibold'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textTitleTransition}>Carga, guarda y vuelve
          </motion.p>

          <motion.p className='mb-8 text-white text-xl'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textDescriptionTransition}>Sube archivos a Nirvana y guarda las tareas resueltas para volver a ellas cuando necesites
           </motion.p>

           
        </div>
        
        <motion.div className='sm:w-full shadow-[0px_15px_15px_5px_#212a2b] rounded-xl'
        initial="hidden"
        whileInView="visible"
        variants={textImgVariant}
        transition={{
          duration:1.5
        }}>
          
          <img src={feature1} alt="nirvana functionality"  className='rounded-xl  '/>
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
          
            <img src={feature2_1} alt="nirvana functionality"  className='rounded-xl shadow-[0px_15px_15px_5px_#212a2b]'/>
            <div>

            
            <img src={feature2_2} alt="" className='absolute right-0 bottom-0 opacity-0 group-hover:opacity-100 duration-1000'/>
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
            <p className='bg-[#f5430c] rounded-full font-semibold px-4 py-2 mb-4 w-fit'>Tag de prueba</p>

            <div className='bg-[#f5430c] rounded-full font-semibold px-4 py-2 mb-4 w-fit'
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
            <button className='flex gap-2 items-center'>Ir a Nirvana <ArrowRight size={18}/></button>
            
          </div>
          </motion.div>

          <motion.p className='text-5xl mb-8 text-[#faf5e8] font-semibold'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textTitleTransition}>Desata el Poder de la Inteligencia Artificial conectada a tu BBDD
          </motion.p>

          <motion.p className='mb-8 text-white text-xl'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textDescriptionTransition}>Conecta y analiza documentos en tu base de datos
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
            <p className='bg-[#fff717] rounded-full font-semibold px-4 py-2 mb-4 w-fit'>Tag de prueba</p>

            <div className='bg-[#fff717] rounded-full font-semibold px-4 py-2 mb-4 w-fit'
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
            <button className='flex gap-2 items-center'>Ir a Nirvana <ArrowRight size={18}/></button>
            
          </div>
          </motion.div>

          <motion.p className='text-5xl mb-8 text-[#faf5e8] font-semibold'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textTitleTransition}>El Mejor Aliado para Resolver Desafíos en Equipo
          </motion.p>

          <motion.p className='mb-8 text-white text-xl'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textDescriptionTransition}>Mientras chateas, usa el comando para activar a Nirvana AI y solicitar ayuda.
           </motion.p>

        </div>
        
        <motion.div className='sm:w-full'
        initial="hidden"
        whileInView="visible"
        variants={textImgVariant}
        transition={{
          duration:1.5
        }}>
        
          <img src={feature3} alt="nirvana functionality"  className='rounded-xl shadow-[0px_15px_15px_5px_#212a2b]'/>
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
        
          <img src={feature4} alt="nirvana functionality"  className='w-full rounded-xl shadow-[0px_15px_15px_5px_#212a2b]'/>
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
            <p className='bg-[#e417ff] rounded-full font-semibold px-4 py-2 mb-4 w-fit'>Tag de prueba</p>

            <div className='bg-[#e417ff] rounded-full font-semibold px-4 py-2 mb-4 w-fit'
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
            <button className='flex gap-2 items-center'>Ir a Nirvana <ArrowRight size={18}/></button>
            
          </div>
          </motion.div>

          <motion.p className='text-5xl mb-8 text-[#faf5e8] font-semibold'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textTitleTransition}>Extiende Tu Poder con Reuniones Grabadas y Minutas Compartidas
          </motion.p>

          <motion.p className='mb-8 text-white text-xl'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textDescriptionTransition}>Usa las poderosas extensiones de Nirvana AI para grabar reuniones y compartir una minuta al instante
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
            <button className='flex gap-2 items-center'>Ir a Nirvana <ArrowRight size={18}/></button>
            
          </div>
          </motion.div>

          <motion.p className='text-5xl mb-8 text-[#faf5e8] font-semibold'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textTitleTransition}>¿Necesitas resolver una tarea con información específica?
          </motion.p>

          <motion.p className='mb-8 text-white text-xl'
           initial="hidden"
           whileInView="visible"
           variants={textPVariant}
           transition={textDescriptionTransition}>Entrena un agente con IA con tus documentos y resuelve en menos tiempo. 
           </motion.p>

        </div>
        
        <motion.div className='sm:w-full '
        initial="hidden"
        whileInView="visible"
        variants={textImgVariant}
        transition={{
          duration:1.5
        }}>
        
          <img src={feature5} alt="nirvana functionality"  className='shadow-[0px_15px_15px_5px_#212a2b] rounded-xl'/>
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
                <button className='flex gap-2'>Ir a Nirvana <ArrowRight size={18}/></button>
              </div>
            </div>
  
            <p className='text-5xl mb-8 text-[#faf5e8] font-semibold '>Carga, guarda y vuelve</p>
  
            <p className=' text-white text-xl'>Sube archivos a Nirvana y guarda las tareas resueltas para volver a ellas cuando necesites
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
                <button className='flex gap-2'>Ir a Nirvana <ArrowRight size={18}/></button>
              </div>
            </div>
  
            <p className='text-5xl mb-8 text-[#faf5e8] font-semibold'>Desata el Poder de la Inteligencia Artificial conectada a tu BBDD</p>
  
            <p className=' text-white text-xl'>Conecta y analiza documentos en tu base de datos
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
                <button className='flex gap-2'>Ir a Nirvana <ArrowRight size={18}/></button>
              </div>
            </div>
            <p className='text-5xl mb-8 text-[#faf5e8] font-semibold'>El Mejor Aliado para Resolver Desafíos en Equipo</p>
  
            <p className='text-white'>Mientras chateas, usa el comando para activar a Nirvana AI y solicitar ayuda.
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
                <button className='flex gap-2'>Ir a Nirvana <ArrowRight size={18}/></button>
              </div>
            </div>
            <p className='text-5xl mb-8 text-[#faf5e8] font-semibold'>Extiende Tu Poder con Reuniones Grabadas y Minutas Compartidas</p>
  
            <p className='text-white'>Usa las poderosas extensiones de Nirvana AI para grabar reuniones y compartir una minuta al instante
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
                <button className='flex gap-2'>Ir a Nirvana <ArrowRight size={18}/></button>
              </div>
            </div>
            <p className='text-5xl mb-8 text-[#faf5e8] font-semibold'>¿Necesitas resolver una tarea con información específica?</p>
  
            <p className='text-white'>Entrena un agente con IA con tus documentos y resuelve en menos tiempo. 
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