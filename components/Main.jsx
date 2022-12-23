import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const urlGitHub = 'https://github.com/stephen-cmd'
const urlLinkedin = 'https://www.linkedin.com/in/stephen-du-preez-38676116b/'

const Main = () => {
    return(
    <div id="home" className="w-full h-screen text-center">
       <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600">LET&apos;S USE TECHNOLOGY TO BETTER THE WORLD</p>
                <h1 className="py-4 text-gray-700">
                    Good day, my name is <span className="text-[#5651e5]"> Stephen</span>
                </h1>

                <h1 className="py-2 text-gray-700">
                    An aspiring Junior Developer
                </h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                    I am currently a Cyber Incident Response Investigator. I would like to pursue application development,
                    as one of my greatest passions is using technology to solve problems within business and the world.
                    I studied a BSc in Computer and Information Science in Application Development. 
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div onClick={() => window.open(urlLinkedin, '_blank')} className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>

                        <div onClick={() => window.open(urlGitHub, '_blank')} className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub />
                        </div>

                        <div onClick={() => window.open('mailto:stephendp730@gmail.com')} className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail />
                        </div>

                        
                </div>
            </div>
        </div> 
    </div>
    )
}

export default Main
