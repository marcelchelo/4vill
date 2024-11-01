//This is the quote page, 
//will render a form with inputs


import React from 'react'
import QuoteForm from '../src/components/QuoteForm';
import NavBarComponent from '../src/components/NavBarComponent';

export default function Page()  {
  
  
  return (

<>
  <NavBarComponent/>
    <div className='p-2 flex flex-col items-center justify-center mt-8'>
      <div className="text-center">
        <h1 className="font-mono font-black text-xl">We would love to partner with you on your next project.</h1>
        <p className=' font-extralight mt-2 font-sans text-md sm:text-sm'> Send us your pdf's for an estimate.</p>
      </div>
      <QuoteForm/>
    </div>
    <div>
    </div>

</>
   
  )
}