import React from 'react';
import SignupForm from '../SignupForm/SignupForm';

const SignupPage = () => {
  return (
    <div className="signup-page" style={{ padding: '6rem 2rem 4rem', maxWidth: '800px', margin: '0 auto', minHeight: '80vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontFamily: '"Franklin Gothic Demi", sans-serif', color: '#333' }}>
        Sign Up
      </h2>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
