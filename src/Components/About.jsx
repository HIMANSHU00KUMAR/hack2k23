import React from 'react'
import  doctor from '../Assets/doctor.png'
import icon1 from '../Assets/upload.png'
import icon2 from '../Assets/downloadimg.png'
const About = () => {
  return (
    <div className='flex lg:flex-row flex-col min-h-screen justify-evenly items-center px-12'>
      <div className='lg:w-1/2'>

        <h1 className='text-5xl font-bold mt-24 lg:mt-0'>About Us</h1>
        <p className='text-xl my-4 mb-8'>Lorem ipsum dolor sit amet, , dolorem ad fuga repellendus quod, eligendi laborum illo laudantium debitis? Impedit rerum quam minima ullam cumque!</p>

        <div className='flex py-4'>
            <img src={icon1} alt="" className='h-24 p-2' />
            <div>
                <h2 className='font-bold text-2xl pb-2'>Upload Docs</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis earum voluptas consequuntur.</p>
            </div>
        </div>
        <div className='flex py-4'>
            <img src={icon2} className="h-24 p-2" alt="" />
            <div>
                <h2 className='font-bold text-2xl pb-2'>Download Docs</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis earum voluptas consequuntur.</p>
            </div>
        </div>
      </div>
      <div className='ml-1 '>
        <img src={doctor} alt="Doctor bhai" />
      </div>
    </div>
  )
}

export default About
