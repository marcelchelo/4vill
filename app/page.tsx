//This is the home page

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
     
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t lg:static lg:h-auto lg:w-auto lg:bg-none">
          
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'black' }}>
              <p className=' dark:text-yellow-200'>
              4Vill. Contracting
              </p>
          </div>
          
        </div>

        <div className="hover:cursor-pointer hover:underline">
          <Link href="/projects" 
            prefetch={false}
            className='text-xl font-semibold'
            >
           Projects
          </Link>
        </div>
       
       {/* Get a quote */}
       <div className="hover:cursor-pointer hover:underline">
          <Link href="/getQuote" 
            prefetch={false}
            className='text-xl font-semibold'
            >
            Get a Quote
          </Link>
        </div>
        
      
        
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

        {/* place 4 vill logo Here */}
        
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-black hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Wood and steel framing{' '}
            
          </h2>
         
          <ul className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <li>Light Gauge Framing</li>
            <li>Heavy Gauge Framing</li>
            <li>Load Bearing Wall Construction</li>
            <li>Layout</li>
          </ul>
          
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-black hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Drywall & Insulation
            
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            We can handle all your drywall needs, either commercial or residential.
            Production drywall, fire rated, sound proofing, etc.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-black hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Taping and Finishing{' '}
           
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            We can handle all your taping and finishing needs for either commercial or residential.
            Level 5 taping, skim coating, etc.
            Production pricing available for comercial spaces
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-black hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Bonded & Insured
            
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            $50 Million, able to tackle small and large projects.
          </p>
        </a>
      </div>
    </main>
  )
}
