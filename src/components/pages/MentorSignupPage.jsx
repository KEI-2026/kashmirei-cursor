import React from 'react';
import MentorForm from '../GetInvolvedPart/GetInvolvedWays/MentorForm';

const MentorSignupPage = () => {
  return (
    <div className="mentor-signup-page" style={{ padding: '6rem 2rem 4rem', maxWidth: '800px', margin: '0 auto', minHeight: '80vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontFamily: '"Franklin Gothic Demi", sans-serif', color: '#333' }}>
        Mentor Registration
      </h2>
      <MentorForm />
    </div>
  );
};

export default MentorSignupPage;
