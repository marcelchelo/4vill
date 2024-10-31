//This is the lading page for the website. It is a simple page with a navigation bar and a few cards that link to the getQuote page.

import NavBarComponent from './src/components/NavBarComponent'
export default function Home() {
  return (

    <div className="min-h-screen flex flex-col" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
        <NavBarComponent/>
     

    
      <main className="flex flex-col items-center justify-center flex-grow p-24">
     

   

        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://www.4villcorp.com/getQuote"
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
            href="https://www.4villcorp.com/getQuote"
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
            href="https://www.4villcorp.com/getQuote"
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
            href="https://www.4villcorp.com/getQuote"
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
    </div>



  )
}
