import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../GetInvolvedPart/GetInvolvedWays/MentorForm.css';
import { countryCodes } from '../../utils/countryCodes';

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    interest: 'Volunteer'
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbysIJEKe08p1OQfV2eJ8q8EdaJsxR9b_sGzJD-xEa8b8dROz5ph71IpQaUzRFgWGIeOIw/exec';
    
    try {
      const searchParams = new URLSearchParams();
      Object.keys(formData).forEach(key => {
        if (key === 'phone') {
          // Prepend a single quote so Google Sheets treats it as text instead of a formula
          searchParams.append(key, `'${formData.countryCode} ${formData.phone}`);
        } else if (key !== 'countryCode') {
          searchParams.append(key, formData[key]);
        }
      });

      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: searchParams,
      });

      // With mode: 'no-cors', the response is opaque and response.ok will be false.
      // We assume success if the network request didn't throw an error.
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        countryCode: '+1',
        phone: '',
        interest: 'Volunteer'
      });
      navigate('/thank-you');
    } catch (error) {
      console.error('Error!', error.message);
      setStatus('Error submitting form.');
    }
  };

  return (
    <div className="mentor-form-container">
      <div className="mentor-form-header">
        <h4>Sign Up Form</h4>
      </div>
      
      <form onSubmit={handleSubmit} className="mentor-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input 
              id="first_name" 
              name="first_name" 
              type="text" 
              value={formData.first_name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input 
              id="last_name" 
              name="last_name" 
              type="text" 
              value={formData.last_name}
              onChange={handleChange}
              required 
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone No</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <select 
                name="countryCode" 
                value={formData.countryCode} 
                onChange={handleChange}
                style={{ width: '120px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                {countryCodes.map((item, index) => (
                  <option key={index} value={item.code}>
                    {item.country} ({item.code})
                  </option>
                ))}
              </select>
              <input 
                id="phone" 
                name="phone" 
                type="text" 
                inputMode="numeric"
                pattern="\d{10}"
                maxLength="10"
                placeholder="1234567890"
                value={formData.phone}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '');
                  if (val.length <= 10) {
                    handleChange({ target: { name: 'phone', value: val } });
                  }
                }}
                required 
                style={{ flex: 1 }}
                title="Please enter exactly 10 digits"
              />
            </div>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="interest">Interest</label>
            <select 
              id="interest" 
              name="interest" 
              value={formData.interest}
              onChange={handleChange}
              required
            >
              <option value="Volunteer">Volunteer</option>
              <option value="Mentor">Mentor</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>
        
        <div className="form-actions">
          <input type="submit" value="Sign Up" className="gi-modal-btn gi-detail-btn" disabled={status === 'Submitting...'} />
        </div>
        {status && <p style={{ textAlign: 'center', marginTop: '1rem', color: '#1B4F8A' }}>{status}</p>}
      </form>
    </div>
  );
};

export default SignupForm;
