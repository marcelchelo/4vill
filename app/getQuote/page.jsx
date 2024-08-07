//This is the quote page, 
//will render a form with inputs


import React from 'react'
import QuoteForm from '../src/components/QuoteForm';
import NavBarComponent from '../src/components/NavBarComponent';

export default function Page()  {
  
  
  return (

<>

  <NavBarComponent/>
    <div className='h-screen'>
      
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-bold font-mono text-2xl">Tell us about your project</h1>
        <p className='font-light mt-2 font-sans text-lg'>We would love to partner with you on your next project. Contact us today.</p>

      </div>

    
      <QuoteForm/>
        
    </div>
</>
   
  )
}