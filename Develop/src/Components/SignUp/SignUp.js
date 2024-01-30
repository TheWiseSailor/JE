import React, { useState } from 'react';
import './SignUp.css'
function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className='SignUpPageContainer'>
    <div className=' SignUpContainer' data-aos="fade-down"
              data-aos-duration="3000">
      <h2>Signup</h2>
      <input type="text" name="name" placeholder={formData.name ? '' : 'Your Name'} value={formData.name} onChange={handleChange} required />
      <input type="tel" name="phone" placeholder={formData.phone ? '' : 'Phone Number'} value={formData.phone} onChange={handleChange} required />
      <input type="email" name="email" placeholder={formData.email ? '' : 'Email'} value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder={formData.password ? '' : 'Password'} value={formData.password} onChange={handleChange} required />
      <input type="submit" value="Signup" />
    </div>
    </div>
  );
}

export default SignupForm;
