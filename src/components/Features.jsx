import React from 'react'
import BenefitsCard from './BenefitsCard'
import {BsHandThumbsUp} from 'react-icons/bs'
import { motion } from "framer-motion"
const Features = ({featuresRef}) => {
  return (
    <section id='features' className='section flex flex-col  items-center justify-center dark:bg-[#131819] bg-[#FDF6FB] text-[#36305C] px-12 font-bold dark:text-white -mb-px md:-mb-0 min-h-screen   pb-8 md:px-48 xl:px-64' >
      
      <p className='text-4xl md:text-5xl text-[#F72585] font-bold flex  mb-12'>Nirvana AI es tu plartaforma asistente para todas tus necesidades y tareas del día a día</p>

      <div className='flex gap-12 flex-wrap  pt-12  w-full md:w-full  justify-center' ref={featuresRef}>
          
          <motion.div 
          className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title="Ahorra tiempo" description="Todo a un click, en una sola plataforma" icon={<BsHandThumbsUp></BsHandThumbsUp>}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true , margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1, delay: 1.25}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title="Amigable al usuario" description="Experiencia intuitiva y conversacional" icon={<BsHandThumbsUp></BsHandThumbsUp>}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1, delay:0.5}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title="IA colectiva" description="IA para colaborar en equipo" icon={<BsHandThumbsUp></BsHandThumbsUp>}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1, delay: 1.75}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title="Administra tus archivos" description="Carga, guarda y trabaja con tus archivos" icon={<BsHandThumbsUp></BsHandThumbsUp>}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1, delay:1}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title="Aumenta eficiencia" description="Mejora flujos de trabajo" icon={<BsHandThumbsUp></BsHandThumbsUp>}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1, delay: 0.25}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title="Agentes con IA" description="Genera asistentes personalizados y externos" icon={<BsHandThumbsUp></BsHandThumbsUp>}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1, delay: 1.5}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title="IA versátil y avanzada" description="Resuelve todo en Nirvana sin las restricciones típicas de los LLMs" icon={<BsHandThumbsUp></BsHandThumbsUp>}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1, delay:0.75}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title="Protección de datos" description="Salvaguarda datos de tu empresa" icon={<BsHandThumbsUp></BsHandThumbsUp>}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1, delay:0.75}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title="Tareas diversas" description="Conecta con tus BBDD y archivos: csv, pdf, doc, docx, xls" icon={<BsHandThumbsUp></BsHandThumbsUp>}/>
          </motion.div>
          
      </div>
          
    </section>
  )
}

export default Features