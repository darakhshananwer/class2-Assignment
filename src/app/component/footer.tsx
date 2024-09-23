import React from 'react';
import { BsLinkedin } from "react-icons/bs";
const Footer =() =>{
return(
    <div className='bg-blue-100'><footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       
        <span className="ml-3 text-xl">Darakhshan Anwer</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2024 Darakhshan Anwer —
     
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a 
        target="_blank"
        href={'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B%2B31Q8PHOSQ%2BbWnTBP66A1Q%3D%3D'} 
        className="text-gray-500">
        <BsLinkedin className="text-3xl hover:text-blue-500"/>
        </a>
   
      </span>
    </div>
  </footer>
  </div>
)
}
export default Footer