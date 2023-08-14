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

  const [currEl, setCurrEl] = useState(null)
  
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      }

      window.addEventListener("scroll", handleScroll);
   
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  useEffect(() => {
    setCurrEl(featuresRef)
  }, [featureIsVisible])
  return (
    <div className='dark:bg-darkBg bg-lightBg' style={{backgroundSize: "cover"}}>
      <Navbar setColorMode={setColorMode} colorMode={colorMode} scrollPosition={scrollPosition}/>
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