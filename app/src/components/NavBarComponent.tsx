import React from 'react';
import Link from 'next/link'
export default function NavBarComponent() {
  return (
    <div className='bg-gradient-to-b from-black to-zinc-700 p-4'>
      <nav className='flex items-center justify-between'>
        <div className='text-white font-bold'>
          <p>4Vill. Contracting</p>
        </div>
        <ul className='flex space-x-4'>
          <li>
           
            <Link className='text-white  hover:text-red-700' href='/'>Homes</Link>
          </li>
          <li>
            <a href='/services' className='text-white hover:text-gray-300'>Services</a>
          </li>
          <li>
            <a href='/contact' className='text-white hover:text-gray-300'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
