import './Contact.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // Form validation state
  const [errors, setErrors] = useState({});
  
  // Success message state
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Social links
  const socialLinks = [
    { id: 'github', icon: <FaGithub size={24} />, url: 'https://github.com/Noorahmed225' },
    { id: 'linkedin', icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/noorahmed-makandar-2k4/' },
    { id: 'email', icon: <FaEnvelope size={24} />, url: 'https://mail.google.com/mail/?view=cm&to=noorahmedmakandar123@gmail.com'},
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  // Validate form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };

  // Send the message using EmailJS.
  // Configure the REACT_APP_EMAILJS_* values in your local .env file first.
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setShowSuccessMessage(false);
      setErrors((current) => ({
        ...current,
        form: 'Email delivery is not configured yet. Please add your EmailJS settings to the .env file.',
      }));
      return;
    }

    setIsSubmitting(true);
    setShowSuccessMessage(false);
    setErrors((current) => ({ ...current, form: '' }));

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,

            template_params: {
            from_name: formData.name,
            reply_to: formData.email,
            from_email: formData.email,
            message: formData.message,
            to_email: 'noorahmedmakandar123@gmail.com',
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Email service rejected the message.');
      }

      setShowSuccessMessage(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccessMessage(false), 5000);
    } catch (error) {
  console.error('EmailJS error:', error);

  setErrors((current) => ({
    ...current,
    form: `Email failed: ${error.message}`,
  }));

    } finally {
      setIsSubmitting(false);
    }
  };

    // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-4 bg-white">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-dark"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h3>
            
            {showSuccessMessage && (
              <motion.div 
                className="mb-6 p-4 bg-green-100 text-green-700 rounded-md"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Thank you for your message! I'll get back to you soon.
              </motion.div>
            )}
            
            {errors.form && (
              <p role="alert" className="mb-4 text-red-600 text-sm">
                {errors.form}
              </p>
            )}

            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={itemVariants}
            >
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <motion.button
                type="submit"
                className="btn-primary flex items-center space-x-2"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </motion.form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:pl-10"
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-dark"
              variants={itemVariants}
            >
              Connect With Me
            </motion.h3>
            
            <motion.div 
              className="text-gray-600 mb-8"
              variants={itemVariants}
            > 
              <p className="text-justify">
              Looking for a dedicated developer for your next project or team?
              Let’s connect I’m open to software development opportunities, 
              collaborative projects, and innovative ideas where I can apply 
              my development skills to build practical solutions. Feel free to 
              connect with me through the contact form, email me directly, or 
              connect with me on LinkedIn. Let’s discuss how we can work together.</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col space-y-4"
              variants={itemVariants}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-700 hover:text-primary transition duration-300"
                >
                  <div className="bg-white p-3 rounded-full shadow-md">
                    {link.icon}
                  </div>
                  <span className="font-medium">
                    {link.id === 'github' && 'GitHub'}
                    {link.id === 'linkedin' && 'LinkedIn'}
                    {link.id === 'email' && 'Email'}
                  </span>
                </a>
              ))}
            </motion.div>
            
            <motion.div
              className="mt-12 p-6 bg-white rounded-lg shadow-md"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold mb-4 text-dark">Current Status</h4>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 inline-block w-3 h-3 shrink-0 bg-green-500 rounded-full"></span>
                <p className="text-gray-600 text-left">
                Open to full-time, freelance, remote, on-site opportunities.
               </p>
             </div>
           </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;