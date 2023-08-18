import React, {useEffect, useRef, useState} from 'react'
import About from '../components/About'
import Features from '../components/Features'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import useColorMode from '../hooks/useColorMode'
import Contact from '../components/Contact'
import { useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const [colorMode, setColorMode] = useColorMode();
  
  const featuresRef = useRef(null)
  const featureIsVisible = useInView(featuresRef)
  const containerRef = useRef(null)
  const [currEl, setCurrEl] = useState(null)
  const svgRef = useRef(null)
  const svgInView = useInView(svgRef)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [t, i18n] = useTranslation("global")
  const [lang, setLang] = useState("es")
  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

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
      <Navbar setColorMode={setColorMode} colorMode={colorMode} scrollPosition={scrollPosition} setLang={setLang} lang={lang} svgInView={svgInView}/>
      <main>
        <Header colorMode={colorMode} featureIsVisible={featureIsVisible} svgInView={svgInView} svgRef={svgRef}/>
        <Features featuresRef={featuresRef} colorMode={colorMode}/>      
        <About currEl={currEl} setCurrEl={setCurrEl} colorMode={colorMode} lang={lang} />
        <Contact/>    
      </main>
      <footer></footer>

    </div>
  )
}

export default HomePage