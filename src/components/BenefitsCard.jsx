import React from 'react'

const BenefitsCard = ({icon, title, description, color}) => {

  return (
    <div className='flex flex-col gap-6 p-4 w-full dark:text-[#faf5e8] mt-4 invert-100 rounded-xl border-none  shadow-2xl hover:scale-110 duration-500 bg-[#343839] h-full glass'>
      <div className='flex items-center gap-4'>
          <div className={`w-10 h-10 border-2 bg-[#3D4546] rounded-md flex justify-center items-center dark:text-[#faf5e8]`} style={{borderColor: color}}>
              {icon}
          </div>
          <p className={`font-bold text-xl`}>
              {title}
          </p>
      </div>
        <p className='font-normal text-md'>
            {description}
        </p>
    </div>
  )
}

export default BenefitsCard

/*  */