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
        <h1 className=' text-4xl'>Formularios de Compañia</h1>
      </div>

      <div className='p-2'>
        <h1 className='text-lg'>Registrate con nosotros</h1>

        
        <div className='mt-0'>
            <iframe 
              width="640px" 
              height="480px" 
              src="https://forms.office.com/r/GSGWEGxEtZ?embed=true" 
              frameborder="0" 
              marginwidth="0" 
              marginheight="0" 
              style={{border: 'none', maxWidth: '100%', maxHeight: '100vh'}} 
              allowFullScreen 
              webkitallowfullscreen 
              mozallowfullscreen 
              msallowfullscreen>
            </iframe>
          </div>
        
      </div>
      
    </div>
    <div>
    </div>

</>
   
  )
}