//This is the quote page, 
//will render a form with inputs
import React from 'react'
export default function getQuote()  {
  



  //function to email the form 
  const handleSubmit = () => {
    console.log("The form Data");
  }
  
  return (
    <div>
      

      <p>Upload the floor plan for an estimate </p>
        <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input type="text" name="name" />
        </label>
        <label>
          Project Address:
          <input type="text" name="address" />
        </label>
        <label>
          Deatils:
          <textarea name="details" rows={4} cols={50}></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}