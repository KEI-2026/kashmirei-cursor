import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '60vh', 
      textAlign: 'center', 
      padding: '2rem' 
    }}>
      <h2 style={{ 
        color: '#47BFDA', 
        marginBottom: '1rem', 
        fontFamily: '"Franklin Gothic Demi", sans-serif',
        fontSize: '2rem'
      }}>
        Thank you for your submission
      </h2>
      <p style={{ color: '#555', marginBottom: '2rem', fontSize: '1.1rem' }}>
        We have received your details and will get in touch with you shortly.
      </p>
      <Link 
        to="/signup" 
        style={{
          display: 'inline-block',
          backgroundColor: '#47BFDA',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontFamily: '"Franklin Gothic Demi", sans-serif',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => { e.target.style.backgroundColor = '#3aa9c4' }}
        onMouseLeave={(e) => { e.target.style.backgroundColor = '#47BFDA' }}
      >
        Return to Sign Up
      </Link>
    </div>
  );
};

export default ThankYou;
