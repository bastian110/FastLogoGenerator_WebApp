'use client'
import React, { useState } from 'react';
import Image from 'next/image';

function Generator() {

    const [formData, setFormData] = useState({
    company_industry: "",
    some_objects: "",
    colors: ""
    });

    const [imageSrc, setImageSrc] = useState(null);

    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData)

    // Assuming formData is an object with the form data
    const response = await fetch("http://localhost:8000/generator", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
        const data = await response.json();
        setImageSrc("data:image/png;base64," + data.image);
    } else {
        console.error("Error submitting form:", response.statusText);
    }
    };


return (

    <div>
        <form onSubmit={handleSubmit} className='max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow-md'>
        <div className='mb-4'>
                    <label for="company_industry" class="block text-sm font-medium text-gray-600">Company Industry:</label>
                    <input 
                        type="text"
                        value={formData.company_industry}
                        onChange={e => setFormData({...formData, company_industry: e.target.value})}
                        className='mt-1 p-2 w-full border rounded-md'
                    />
        </div>
        <div className='mb-4'>
                    <label for="some_objects" class="block text-sm font-medium text-gray-600">Some objects:</label>
                    <input 
                        type="text"
                        value={formData.some_objects}
                        onChange={e => setFormData({...formData, some_objects: e.target.value})}
                        className='mt-1 p-2 w-full border rounded-md'
                    />
        </div>
        <div className='mb-4'>
                    <label for="colors" class="block text-sm font-medium text-gray-600">Choose colors:</label>
                    <input 
                        type="text"
                        value={formData.colors}
                        onChange={e => setFormData({...formData, colors: e.target.value})}
                        className='mt-1 p-2 w-full border rounded-md'
                    />
        </div>

                    <button className='className="rounded-full bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"' type="submit">Submit</button>
        </form>
        
        {imageSrc && <img src={imageSrc} alt="Generated Logo" />}
    </div>

);

}
export default Generator;





