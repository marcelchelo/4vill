import React from 'react';
import Link from 'next/link'
export default function NavBarComponent() {
  return (
    <div className='bg-gradient-to-b from-black to-zinc-800 p-4'>
      <nav className='flex items-center justify-between'>
        <div className='text-white font-bold text-xl dark:text-yellow-400'>
          <Link href='/' legacyBehavior>
              <a className='font-mono font-bold sm:hidden'>4Vill Corp</a>
            </Link>
            <Link href='/' legacyBehavior>
              <a className='font-mono font-bold hidden sm:block'>4Vill Contracting</a>
            </Link>
        </div>


        {/* Other Links */}
        <ul className='flex space-x-4 text-lg font-mono'>
          <li>
            <a href='/projects' className='text-white underline underline-offset-4 hover:text-yellow-400'>Projects</a>
          </li>
          <li>
            <a href='/getQuote' className='text-white underline underline-offset-4 hover:text-yellow-400'>Estimate</a>
          </li>
          <li>
            <a href='https://fanatical-math-e2a.notion.site/1345c9f2c2db80e5bb5efaf2a354eaee?pvs=105' 
                target='_blank' 
                rel='noopener noreferrer' className='text-white underline underline-offset-4 hover:text-yellow-400'
                >
              Trabaja con nosotros
            </a>
              
          </li>
        </ul>
      </nav>
    </div>
  );
}
