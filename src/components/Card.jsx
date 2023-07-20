import React from 'react'
import { motion } from 'framer-motion'
const Card = ({ title, description, useCase, src }) => {
  const arrow = {
    initial: { visibility: "hidden", scale: 1 },
    animate: { opacity: 1, scale: 1.5 },

  }
  return (
    <motion.div className='w-72 relative bg-white md:w-96 flex flex-col items-center rounded-2xl   shadow-xl duration-1000  group' whileHover="animate">
      <div className='bg-black h-48 w-48 relative shrink-0' style={{ top: "-20%" }}>
        <img src="" alt="" />
      </div>
      <p className='text-black text-xl'>Hello</p>

      <motion.div variants={arrow}>
        <p className='text-xl text-black px-6 pb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

      </motion.div>
    </motion.div>
  )
}

export default Card