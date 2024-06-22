import React from 'react';
import Link from 'next/link'
export default function NavBarComponent() {
  return (
    <div className='bg-gradient-to-b from-black to-zinc-800 p-4'>
      <nav className='flex items-center justify-between'>
        <div className='text-white font-bold text-xl dark:text-yellow-400'>
          <h1 className='font-mono font-bold'>4Vill. Contracting</h1>
        </div>
        <ul className='flex space-x-4 text-2xl font-thin'>
          <li>
           
            <Link className='text-white hover:text-yellow-400' href='/'>Home</Link>
          </li>
          <li>
            <a href='/services' className='text-white  hover:text-yellow-400'>Services</a>
          </li>
          <li>
            <a href='/contact' className='text-white  hover:text-yellow-400'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
