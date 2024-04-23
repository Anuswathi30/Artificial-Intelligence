
import React, { useState } from 'react';
import './Contact.css'
import formbgimg from'../../components/assets/t22.gif'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
      });
      const [errors, setErrors] = useState({});
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(formData);
        if (Object.keys(errors).length === 0) {
          // Form is valid, submit data or perform other actions
          console.log('Form submitted:', formData);
        } else {
          setErrors(errors);
        }
      };
      const validateForm = (data) => {
        const errors = {};
        if (!data.name.trim()) {
          errors.name = 'Name is required';
        }
        if (!data.email.trim()) {
          errors.email = 'Email is required';
        } else if (!isValidEmail(data.email)) {
          errors.email = 'Invalid email format';
        }
        if (!data.mobile.trim()) {
          errors.mobile = 'Mobile number is required';
        } else if (!isValidMobile(data.mobile)) {
          errors.mobile = 'Invalid mobile number';
        }
        return errors;
      };
      const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
     };
     const isValidMobile = (mobile) => {
        // Basic mobile number validation regex
        return /^\d{10}$/.test(mobile);
      };
  return (
    
    <div className='form'>
       
      <h1>CONTACT US</h1>
      <form onSubmit={handleSubmit}>
        <div id="details">
          <label>Name</label>
          <input
          placeholder='Enter your Name'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div id="details">
          <label>Email</label>
          <input
          placeholder='Enter your Email'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div id="details">
          <label>Mobile</label>
          <input
          placeholder='Enter your Number'
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <span>{errors.mobile}</span>}
        </div>
        
      </form>
      <button type="submit">Submit</button>
    </div>

    
  );
};

export default Contact;