import Link from 'next/link'
import React, {useRef} from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import emailjs, { send } from '@emailjs/browser';
import {useState} from 'react';

const Contact = () => {
    const urlGitHub = 'https://github.com/stephen-cmd'
    const urlLinkedin = 'https://www.linkedin.com/in/stephen-du-preez-38676116b/'
    const form = useRef();

    /*const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.send('service_3nm73n4', 'template_1nbibeo', form.current, 'w6C2aRvRa1a66jA04')
        .then((result) => {
            console.log(result.text);
            console.log("Message Sent!")
        }, (error) => {
            console.log(error.text);
        });
    };*/
    
    const [to_name, setTo_Name] = useState("");
    const [from_name, setFrom_name] = useState("");
    const [message, setMessage] = useState("");
    const submitInfo = () => {
        console.log(to_name + from_name + message)




        emailjs.send('service_3nm73n4', 'template_1nbibeo', form.current, 'w6C2aRvRa1a66jA04')
        .then((result) => {
            console.log(result.text);
            console.log("Message Sent!")
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Contact
            </p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
{/* left */}
<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
 <div className='lg:p-4 h-full'>
   <div>
     <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='/' />
   </div>
   <div>
      <h2 className='py-2'>Stephen Du Preez</h2>
      <p className='py-2'>Junior Developer</p>
      <p className='py-2'>I am avalilable for a full-time postion.</p>
    </div>
    <div>
    <p className='uppercase pt-8'>Connect With Me</p>
    <div className='flex items-center justify-between py-4'>
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
{/* right */}

 <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
    <div className='p-4'>
       <form ref={form} onSubmit={submitInfo}>
          <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Name</label>
                  <input
                  placeholder='Your Name' 
                  className='border-2 rounded-lg p-3 flex border-gray-300' 
                  type="text"
                  name="user_name" 
                  onChange={(event) => {setTo_Name(event.target.value)}}
                  />
                </div>
                
                {/*<div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Phone number</label>
                  <input 
                  className='border-2 rounded-lg p-3 flex border-gray-300' 
                  type="text" 
                  />
                </div>*/}

                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input 
                    placeholder='Your Email'
                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type="email" 
                    name="user_email"
                    onChange={(event) => {setFrom_name(event.target.value)}}
                    />
                    
                </div>

                {/*<div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input 
                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type="text" 
                    />
                    
                </div>*/}

                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea placeholder='Type Your Message To Me Here' className='border-2 rounded-lg p-3 borded-gray-300' rows='10' name="message" onChange={(event) => {setMessage(event.target.value)}}></textarea>
                    
                </div>
            </div>
            <button onClick={ submitInfo } className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
        </form> 

    </div>
 </div>

            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact