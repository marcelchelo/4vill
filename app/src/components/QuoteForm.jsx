// components/QuoteForm.jsx

'use client'
import React, { useState } from 'react';

export default function QuoteForm() {
    const [companyName, setCompanyName] = useState('');
    const [details, setDetails] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [files, setFiles] = useState([]);
    
    // send the files to a lambda function endpoint
    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log("Company Name:", companyName);
        console.log("Details:", details);
        console.log("Contact Email:", contactEmail);
        console.log("Contact Phone:", contactPhone);
    }

    return (
        <div className='flex justify-center items-center mt-4'>
            <div className='p-2 rounded-md w-3/4 sm:w-full'>
                <form className="sm:w-full " onSubmit={handleSubmit}>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
                                Business or Contact Name:
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

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
                                Email:
                                <input 
                                    type='email'
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    placeholder="Enter your email"
                                />
                            </label>
                        </div>
                    </div>


                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2'>
                                Contact Phone:
                                <input 
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    type="text" 
                                    placeholder="123-456-7890"
                                    onChange={(e) => {
                                      const phoneNumber = e.target.value;
                                      if (/^\d{0,10}$/.test(phoneNumber)) {
                                          setContactPhone(phoneNumber);
                                      }
                                  }}
                                  value={contactPhone}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
                                Details:
                                <textarea 
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-y" 
                                    value={details} 
                                    onChange={(e) => setDetails(e.target.value)} 
                                    placeholder="For an accurate quote please provide adequate information, and scope required."
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
                                Floor Plan PDF:
                                <input 
                                    type='file'
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-y" 
                                    accept=".pdf"
                                    onChange={(e) => setDetails(e.target.files[0])} 
                                    placeholder="Upload floor plan, in pdf format"
                                />
                            </label>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                      <button className='bg-blue-400 p-2 rounded-md'>Submit</button>
                    </div>
                </form>
                <div className='p-2 shadow-md mt-2'>
                    <p className='text-xs font-extralight'>We will contact you with an estimate for your project within 2 business days.</p>
                    <p className='text-xs'>A jobsite visit may be required.</p>
                </div>

                {/* Form Link */}
                <div>
                    <a 
                        href='https://docs.google.com/forms/d/e/1FAIpQLSeUcM0k6VfMqUK5-8NROiZESoRXyvj9dLLEhkmsKSR0ILwJ-Q/viewform?usp=sf_link' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='text-blue-500 underline'
                    >
                        Fill out Google Form
                    </a>
                </div>
                
            </div>
        </div>
    );
}