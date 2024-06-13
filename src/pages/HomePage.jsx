import React, {useEffect, useRef, useState} from 'react'
import About from '../components/About'
import Features from '../components/Features'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import useColorMode from '../hooks/useColorMode'
import Contact from '../components/Contact'
import { useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

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
  const [open, setOpen] = useState(false)
  const [alertInfo, setAlertInfo] = useState({
    title: "",
    description: "",
    status: ""  
  })
  const variants = {
    hidden: {opacity: 0, },
    visible: { opacity: 1},
  }; 

  useEffect(() => {
    const userLanguage = navigator.language.split("-")[0]

    if (userLanguage === "es" || userLanguage === "en") {
      setLang(userLanguage)
    } else {
      setLang("en")
    }
  }, [])

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
        <Contact setOpen={setOpen} setAlertInfo={setAlertInfo}/>    
      </main>
      {open && <motion.div className={`${alertInfo.status === "error" ? 'bg-red-100 border-red-400 text-red-700' : 'bg-green-100 border-green-400 text-green-700'} border px-4 py-3 rounded fixed bottom-0 w-11/12 z-50 left-1/2 -translate-x-1/2`} role="alert"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{
          duration: 1
        }}>
        <strong className="font-bold">{t(alertInfo.title)}</strong>
        <span  className="block sm:inline">{t(alertInfo.description)}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg className={`fill-current h-6 w-6 ${alertInfo.status === "error" ? 'text-red-500' : 'text-green-500'}`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" onClick={() => setOpen(false)}><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
        </motion.div>

        
        }  
      <footer></footer>

    </div>
  )
}

export default HomePage