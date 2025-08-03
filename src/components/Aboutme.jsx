import React from 'react'
import { AuroraText } from './magicui/aurora-text'

const Aboutme = () => {
  return (
    <div className='conatiner w-4/5 mx-auto my-10 h-screen'>
        <h1 className="text-xl text-white/60 font-semibold py-3" >Know About Me</h1>
        <div className="">
            <div className="w-[56%] relative">
                <h1 className="font-semibold text-6xl">Full-Stack Developer and a little bit of <AuroraText >everything</AuroraText> </h1>
                        <div className="absolute top-2/3 left-1/3 w-1/2 inset-0 h-2 bg-white/90 blur-2xl rounded-full"></div>

            </div>
            <div className=""></div>
        </div>
    </div>
  )
}

export default Aboutme