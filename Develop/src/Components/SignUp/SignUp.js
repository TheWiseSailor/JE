import React, { useState } from 'react';
import './SignUp.css';
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
        <h2>Signup</h2>
        <input type="text" name="name" placeholder={formData.name ? '' : 'Your Name'} value={formData.name} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder={formData.phone ? '' : 'Phone Number'} value={formData.phone} onChange={handleChange} required />
        <input type="email" name="email" placeholder={formData.email ? '' : 'Email'} value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder={formData.password ? '' : 'Password'} value={formData.password} onChange={handleChange} required />
        <input type="submit" value="Signup" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', borderRadius: '3px', cursor: 'pointer' }} />
      </form>
    </div>
  );
}

export default SignupForm;
