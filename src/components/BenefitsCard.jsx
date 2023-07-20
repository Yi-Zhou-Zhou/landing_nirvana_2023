import React from 'react'

const BenefitsCard = ({icon, title, description}) => {
  return (
    <div className='flex flex-col gap-6 p-4 w-full text-white mt-4 invert-100 border rounded-xl border-none  shadow-2xl hover:scale-110 duration-500 bg-[#343839] h-full   '>
      <div className='flex items-center gap-4'>
          <div className='w-10 h-10 border-none bg-[#3D4546] rounded-md flex justify-center items-center text-white'>
              {icon}
          </div>
          <p className='font-bold text-xl'>
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