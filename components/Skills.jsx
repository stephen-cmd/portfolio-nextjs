import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5] '>Skills</p>
            <h2 className='py-4'>What I can do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


                <div className='p-6 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            src='/../public/assets/skills/py.png' 
                            width='64' 
                            height='64' 
                            alt='/'
                            />


                        </div>
                       <div className='flex flex-col items-center justify-center'>
                        <h3>PYTHON</h3>
                       </div>
                    </div>

                </div>


                <div className='p-6 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            src='/../public/assets/skills/Powershell.png' 
                            width='64' 
                            height='64' 
                            alt='/'
                            />


                        </div>
                       <div className='flex flex-col items-center justify-center'>
                        <h3>POWERSHELL</h3>
                       </div>
                    </div>

                </div>

                <div className='p-6 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            src='/../public/assets/skills/golang.png' 
                            width='64' 
                            height='64' 
                            alt='/'
                            />


                        </div>
                       <div className='flex flex-col items-center justify-center'>
                        <h3>GOLANG</h3>
                       </div>
                    </div>

                </div>


                <div className='p-6 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            src='/../public/assets/skills/ruby.png' 
                            width='64' 
                            height='64' 
                            alt='/'
                            />


                        </div>
                       <div className='flex flex-col items-center justify-center'>
                        <h3>RUBY</h3>
                       </div>
                    </div>

                </div>
    
            </div>



            <h2 className='py-4'>What I am learning</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


                <div className='p-6 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            src='/../public/assets/skills/nextjs.png' 
                            width='64' 
                            height='64' 
                            alt='/'
                            />


                        </div>
                       <div className='flex flex-col items-center justify-center'>
                        <h3>NEXT.JS</h3>
                       </div>
                    </div>

                </div>


                <div className='p-6 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            src='/../public/assets/skills/react.png' 
                            width='64' 
                            height='64' 
                            alt='/'
                            />


                        </div>
                       <div className='flex flex-col items-center justify-center'>
                        <h3>REACT</h3>
                       </div>
                    </div>

                </div>

                <div className='p-6 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            src='/../public/assets/skills/tailwind.png' 
                            width='64' 
                            height='64' 
                            alt='/'
                            />


                        </div>
                       <div className='flex flex-col items-center justify-center'>
                        <h3>TAILWIND</h3>
                       </div>
                    </div>

                </div>


                <div className='p-6 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            src='/../public/assets/skills/css.png' 
                            width='64' 
                            height='64' 
                            alt='/'
                            />


                        </div>
                       <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                       </div>
                    </div>

                </div>

                <div className='p-6 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            src='/../public/assets/skills/javascript.png' 
                            width='64' 
                            height='64' 
                            alt='/'
                            />


                        </div>
                       <div className='flex flex-col items-center justify-center'>
                        <h3>JAVASCRIPT</h3>
                       </div>
                    </div>

                </div>

                <div className='p-6 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            src='/../public/assets/skills/github1.png' 
                            width='64' 
                            height='64' 
                            alt='/'
                            />


                        </div>
                       <div className='flex flex-col items-center justify-center'>
                        <h3>GITHUB</h3>
                       </div>
                    </div>

                </div>
    
            </div>


        </div>
    </div>
  )
}

export default Skills