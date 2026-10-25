import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/all-projects';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'projects', text: 'Projects' },
    { id: 'about', text: 'About' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {isProjectsPage ? (
          <a href="/#home" className="text-2xl font-bold text-primary cursor-pointer">
            Portfolio
          </a>
        ) : (
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="text-2xl font-bold text-primary cursor-pointer"
          >
            Portfolio
          </Link>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            isProjectsPage ? (
              <a
                key={link.id}
                href={`/#${link.id}`}
                className="text-dark hover:text-primary font-medium transition duration-300 cursor-pointer"
              >
                {link.text}
              </a>
            ) : (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-dark hover:text-primary font-medium transition duration-300 cursor-pointer"
                activeClass="text-primary"
              >
                {link.text}
              </Link>
            )
          ))}

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {/* Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="text-dark focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              isProjectsPage ? (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  className="text-dark hover:text-primary font-medium transition duration-300 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </a>
              ) : (
                <Link
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="text-dark hover:text-primary font-medium transition duration-300 cursor-pointer"
                  activeClass="text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;