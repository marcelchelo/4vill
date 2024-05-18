//This is the quote page, 
//will render a form with inputs


import React from 'react'
import QuoteForm from '../src/components/QuoteForm';
import NavBarComponent from '../src/components/NavBarComponent';

export default function Page()  {
  
  
  return (
    <div>
      

     <NavBarComponent/>
      <QuoteForm/>
        
    </div>
  )
}