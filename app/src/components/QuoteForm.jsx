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
    
    <div className='flex justify-center items-center h-screen'>


        <div className='bg-slate-300 p-6 rounded-lg shadow-md w-2/3'>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label className='block text-sm font-medium text-black'>
                        Business or Home owner name:
                        <input 
                            className='mt-1 block w-full rounded-md border-gray-300 
                                shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 
                                focus:ring-opacity-50' 
                            type="text" 
                            value={companyName} 
                            onChange={(e) => setCompanyName(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label className='block text-sm font-medium text-black'>
                        Contact Email:
                        <input 
                        className='mt-1 block w-full rounded-md border-gray-300 
                            shadow-sm focus:border-indigo-300 focus:ring
                            focus:ring-indigo-200 focus:ring-opacity-50' 
                        type="email" value={contactEmail} 
                        onChange={(e) => setContactEmail(e.target.value)} />
                    </label>
                </div>
        
            
            {/* adddress */}
            <div className='flex justify-between '>
                <div className='flex-1 mr-2'>
                    <label className=' text-sm font-medium'>
                        Project&apos;s Address:
                        <input 
                            className='mt-1 p-1 block w-full rounded-md border-gray-300 
                                shadow-sm focus:border-indigo-300 focus:ring
                                focus:ring-indigo-200 focus:ring-opacity-50' 
                            type="text" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} />
                    </label>
                </div>

                <div className='flex-1 ml-2'>
                    <label className=' text-sm font-medium'>
                        Project&apos;s Zipcode:
                        <input 
                            className='mt-1 p-1 block w-full rounded-md border-gray-300 
                                shadow-sm focus:border-indigo-300 focus:ring
                                focus:ring-indigo-200 focus:ring-opacity-50' 
                            type="text" 
                            value={zipcode} 
                            onChange={(e) => setZipcode(e.target.value)} />
                    </label>
                </div>

                </div>
            
                <div>
                    <label className='block text-sm font-medium text-black'>
                        Project Super Name:
                        <input 
                        className='mt-1 p-1 block w-full rounded-md border-gray-300 
                            shadow-sm focus:border-indigo-300 focus:ring
                            focus:ring-indigo-200 focus:ring-opacity-50' 
                        type="text" 
                        value={superName} 
                        onChange={(e) => setSuperName(e.target.value)} />
                    </label>
                </div>
            

                {/* end of address  */}

                
                <div>
                    <label className='block text-sm font-medium text-black'>
                        Project Description:
                        <textarea 
                            className='mt-1 block w-full rounded-md border-gray-300 
                                shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 
                                focus:ring-opacity-50' 
                            placeholder='
                                        information that will help us understand your project better,
                                        square footage, comercial or residential,
                                        ceiling height, Firestop, type of materials utilized,
                                         finishing level 1-5, 
                                            carpentry, insulation finishing,
                                            all three?' 
                            value={details} 
                            onChange={(e) => setDetails(e.target.value)} />
                    </label>
                </div>
                
                <div>
                    <label className='block text-sm font-medium text-black'>
                        Contact Phone:
                        <input 
                            className='mt-1 block w-full rounded-md
                             border-gray-300 shadow-sm focus:border-indigo-300
                            focus:ring focus:ring-indigo-200 focus:ring-opacity-50' 
                            type="tel" 
                            pattern="\d{10}" 
                            maxLength="10"
                            value={contactPhone} 
                            onChange={(e) => setContactPhone(e.target.value)} />
                    </label>
                </div>

                <div>
                    <label className='block text-sm font-medium text-black'>
                        Upload Documents:
                        <input 
                            className='mt-1 block w-full rounded-md border-gray-300 
                                shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 
                                focus:ring-opacity-50' 
                            type="file" 
                            accept=".pdf,image/*" 
                            multiple
                            onChange={(e) => setFiles(e.target.files)} 
                        />
                    </label>
                </div>
                <div>
                    <button className='w-1/3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm
                     font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                      focus:ring-blue-500' type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
    );
}