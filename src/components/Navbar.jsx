import React from 'react'
import Userdetails from './Userdetails'


export default function Navbar() {
  return (
    <div className='space-y-5 text-zinc-800 text-xl'>
        <h3>Welcom to Crud Operation</h3>
        <h1 className='text-7xl text-slate-300 font-extrabold'>ADMIN TABLE</h1>
        <h3>ONE Destination of Web Development Courses</h3>
           
           <div className=''>
            <ul className='flex bg-slate-300 py-3 gap-x-10 justify-center'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
           </div>
  <Userdetails/>
    </div>
  )
}
