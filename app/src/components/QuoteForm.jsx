// components/QuoteForm.jsx

'use client'
import React, { useState } from 'react';

export default function QuoteForm() {
    const [companyName, setCompanyName] = useState('');
    const [details, setDetails] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [address, setAddress] = useState('');
    const [files, setFiles] = useState([]);
    const [zipcode, setZipcode] = useState('');
    const [superName, setSuperName] = useState('');
    // send the files to a lambda function endpoint
    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log("Company Name:", companyName);
        console.log("Details:", details);
        console.log("Contact Email:", contactEmail);
        console.log("Contact Phone:", contactPhone);
    }

    return (
    
    <div className='flex justify-center items-center mt-6 p-2'>

        <div className='bg-slate-300 p-4 rounded-[8px] w-2/3'>
        <form className="w-full max-w-lg">
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Business or Home owner name:
          <input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            type="text" 
            value={companyName} 
            onChange={(e) => setCompanyName(e.target.value)} 
            placeholder="Your Name"
          />
        </label>
      </div>
    </div>
    <div className='flex flex-wrap -mx-3 mb-6'>
      <div className='w-full px-3'>
        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
          Contact Phone:
          <input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            type="text" 
            placeholder="123-456-7890"
            onChange={(e) => {
              const phoneNumber = e.target.value;
              if (phoneNumber.length === 10) {
                setContactPhone(phoneNumber);
              }
            }}
          />
        </label>
      </div>
    </div>
    {/* add input field for a text box called details  */}
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Details:
          <textarea 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-y" 
            value={details} 
            onChange={(e) => setDetails(e.target.value)} 
            placeholder="For an accurate quote please provide adequate information, and scope required."
          />
        </label>
      </div>

      {/* upload files */}
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Documents:
          <textarea 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-y" 
            value={details} 
            onChange={(e) => setDetails(e.target.value)} 
            placeholder="Upload floor plan, in pdf format"
          />
        </label>
      </div>

    </div>
    <button className='bg-blue-400 p-2  rounded-md'>Submit</button>
  </form>
        <p className='text-sm'>We will contact you with an estimate for your project within 2 business days.</p>
        <p className='text-sm'>A jobsite visit may be required.</p>
        </div>
    </div>
    );
}