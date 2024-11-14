import React, { useState } from 'react';
import styles from "./ContactUs.module.css";
import { Link } from 'react-router-dom';
import FrontNav from '../FronNav/FrontNav';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.phone) errors.phone = 'Phone is required';
    else if (!/^\d{11}$/.test(formData.phone)) errors.phone = 'Phone must be 10 digits';
    if (!formData.message) errors.message = 'Message is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Store the form data in localStorage
      localStorage.setItem('contactFormData', JSON.stringify(formData));

      // Reset form fields and errors
      setFormData({ name: '', phone: '', message: '' });
      setFormErrors({ name: '', phone: '', message: '' });
    }
  };
  return (
    <div className="container">
      <FrontNav />
      <div className={styles.contact}>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
          </div>

          <div className="mb-4" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-25 px-3 py-2 border rounded-md h-32"
            />
            {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
          </div>

          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

