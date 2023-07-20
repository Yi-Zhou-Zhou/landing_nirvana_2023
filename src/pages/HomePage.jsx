import React, {useEffect, useRef, useState} from 'react'
import About from '../components/About'
import Features from '../components/Features'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import useColorMode from '../hooks/useColorMode'
import Contact from '../components/Contact'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
const HomePage = () => {
  const [colorMode, setColorMode] = useColorMode();
  
  const featuresRef = useRef(null)
  const featureIsVisible = useInView(featuresRef)
  
  const containerRef = useRef(null)
  const containerIsVisible = useInView(containerRef)

  const [currEl, setCurrEl] = useState(null)


  useEffect(() => {
    setCurrEl(featuresRef)
  }, [featureIsVisible])
  return (
    <div className='dark:bg-[#131819]'>
      <Navbar setColorMode={setColorMode} colorMode={colorMode}/>
      <Header colorMode={colorMode} featureIsVisible={featureIsVisible}/>
        <Features featuresRef={featuresRef}/>
      <div ref={containerRef}
        animate={{
          
        }}
      > 
        <About currEl={currEl} setCurrEl={setCurrEl} />
        <Contact/>

      </div>
    </div>
  )
}

export default HomePage