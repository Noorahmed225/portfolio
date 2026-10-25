import './Footer.css';
import React from 'react';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  
  

  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Portfolio</p>
            <p className="text-sm text-gray-400">© {currentYear} All Rights Reserved</p>
          </div>
          
          </div>
        </div>
    </footer>
  );
};

export default Footer;