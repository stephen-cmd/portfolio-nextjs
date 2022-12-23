import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600 italic'>An aspiring developer with a security background</p>

                <p className='py-2 text-gray-600'>
                   My Name is Stephen Du Preez, I was born and raised in Johannesburg. 
                   I am 24 years old and like most of my generation live at home, in my case with my mother and dog Milo. 
                   I am a full of life, glass half-full type of person, enthusiastic, hardworking, a problem solver and always authentic to who I am and what i believe.
                </p>

                <p className='py-2 text-gray-600'>
                   My childhood was very beneficial being an only child to a hard working single parent, as I feel it taught me to be a self starter, disciplined and curious about how things work. 
                   I believe it is that curiosity that lead me to programming. 
                   I have learnt that nothing is impossible with dedication and hard work. 
                   My philosophy in life is your greatest asset is knowledge and your willingness to learn.
                </p>

                <p className='py-2 text-gray-600'>
                   I graduated in 2019 and had aspirations to move to the USA, but unfortunately the CoronaVirus broke out at that time. 
                   In the years thereafter I realized that all I need is right here in South Africa, it&apos;s a country like no other. 
                   The hard lockdowns were difficult for everyone, but I managed to find a job working for a Cyber Incident Response team in 2021, where I have been growing and learning in different aspects within the company to date.   
                </p>
                
                <p className='py-2 text-gray-600'>
                   Cyber Incident Response is a good field as you are always on the forefront of what is happening in the world of cyber criminals, which was exciting. 
                   I found that despite the excitement, I was more inspired about finding solutions to the problems or challenges which arose in our business or for the clients in those situations, than the actual investigations. 
                   I have always been very excited by programming as a tool for creating solutions to any challenges, especially in a business context.
                </p>
                <p className='py-2 text-gray-600'>
                   Within the company I was required to teach myself <b>Python</b>, <b>PowerShell</b>, <b>GoLang</b> and the basics of <b>Ruby</b>.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                        <div className='m-auto'>
                            <Image 
                            src='/../public/assets/skills/Stephen_Du_Preez.jpeg' 
                            width='400' 
                            height='100' 
                            alt='/'
                            />


                        </div>
            </div>
        </div>
    </div>
  )
}

export default About
