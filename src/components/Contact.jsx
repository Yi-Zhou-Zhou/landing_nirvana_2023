import React, {useState} from 'react'
import { motion } from 'framer-motion'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { useTranslation } from 'react-i18next';
const Contact = () => {
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useState(false)
  const [formValues, setFormVallues] = useState({
    name: "",
    email :"",
    phone: "",
    message: ""
  })
  const moveToRight = {
    hidden: {translateX: width >= 600 ? "-600px" : "-300px"},
    visible: {translateX: "0px"}
  }

  const moveToTop = {
    hidden: {translateY: "100vh"},
    visible: {translateY: "0"}
  }

  const [t] = useTranslation("global")

  const handleChange = (e) => {
    const newForm = {...formValues}
    newForm[e.target.name] = e.target.value
    setFormVallues(newForm)
  }


  const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  const handleSubmit = async() => {
    if (!formValues.name || !validateEmail(formValues.email)){
      setOpen(true)
      return
    }

    try{
      const response = await fetch("https://atnoywuau4jzeq6wrpbpfzk2am0dmqjv.lambda-url.us-east-1.on.aws/", {
        method:"POST",
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "name": formValues.name, "email": formValues.email ,"phone": formValues.phone ? formValues.phone : "", "message": formValues.message ? formValues.message : "" })
      })
      console.log(result)
    }catch (error){
      console.log(error)
    }
   
    
  }
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
        <div className='flex flex-col gap-4'> 
          <div>
            <p className='text-4xl w-fit text-white'>{t("contact.title2")}</p>
            <p className='text-md w-fit text-white'>{t("contact.description")}</p>
          </div>
          <div>
            <p className='text-4xl w-fit text-white'>{t("contact.title")}</p>
            <p className='text-4xl font-bold w-fit text-[#F72585] underline'>Nirvana-AI</p>
          </div>
          
        </div>
         
      </motion.div>
        
      <motion.form className="grow flex flex-col gap-16" aria-label='waitlist form'>

        <motion.div className='flex flex-wrap justify-between'
        variants={moveToTop}
        transition={{
          duration: 1
        }}
        >
          <div className="relative z-0 w-5/12">
            <input type="text" onChange={handleChange} id="name" name="name" value={formValues.name} className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="name" className="absolute text-sm  dark:text-white  duration-300 transform -translate-y-6 text-white scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("contact.input1")}</label>
          </div>
          <div className="relative z-0 w-5/12">
            <input type="text" id="email" onChange={handleChange}  name="email" value={formValues.email} className="block py-2.5 px-0 w-full text-sm  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="email"  className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("contact.input2")}</label>
          </div>
        </motion.div>
        
        <motion.div className='flex flex-wrap  justify-between'
        variants={moveToTop}
        transition={{
          duration: 1
        }}>
          <div className="relative z-0 w-5/12">
            <input type="text" id="phone" onChange={handleChange}  name="phone" value={formValues.phone} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="phone" className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("contact.input3")}</label>
          </div>
          <div className="relative z-0 w-5/12">
            <input type="text" id="message" onChange={handleChange}  name='message' value={formValues.message} className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="message" className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("contact.input4")}</label>
          </div>
        </motion.div>
        <motion.button onClick={handleSubmit} type="button" className='bg-[#F72585] text-white w-fit px-4 py-2 text-xl self-end rounded-full'
        variants={moveToTop}
        transition={{
          duration: 1
        }}>{t("contact.cta")}</motion.button>
      </motion.form>
        {open && <div class={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full`} role="alert">
        <strong class="font-bold">{t("contact.errorTitle")}</strong>
        <span class="block sm:inline">{t("contact.errorDescription")}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" onClick={() => setOpen(false)}><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
        </div>
        }   
    </motion.section>
    
  )
}

export default Contact