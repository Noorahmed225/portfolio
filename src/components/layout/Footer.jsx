import './Footer.css';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-3">
      <div className="container mx-auto px-4 text-center">
       <p className="text-2xl md:text-3xl font-bold text-white mb-4"> Thank You😊 </p>
      </div>
    </footer>
  );
};

export default Footer;