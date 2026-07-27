import React, { useState } from 'react';
import './MentorForm.css';

const subjectsMap = {
  "Science": ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Informatics Practices"],
  "Commerce": ["Accountancy", "Business Studies", "Economics", "Mathematics", "Informatics Practices"],
  "Arts/Humanities": ["History", "Geography", "Political Science", "Economics", "Urdu", "Hindi", "Sanskrit", "Home Science", "Mathematics"]
};

const allSubjects = [
  "Economics", "Urdu", "Mathematics", "History", "Geography", 
  "Political Science", "Hindi", "Sanskrit", "Home Science", 
  "Business Studies", "Accountancy", "Informatics Practices", 
  "Biology", "Physics", "Chemistry", "Computer Science"
];

const MentorForm = () => {
  const [educationStream, setEducationStream] = useState("");
  const [retUrl] = useState(() => 
    typeof window !== 'undefined' ? `${window.location.origin}/get-involved` : 'https://kashmirei.org/get-involved'
  );
  
  const subjectsToShow = educationStream ? subjectsMap[educationStream] : allSubjects;

  return (
    <div className="mentor-form-container">
      <div className="mentor-form-header">
        <h4>Mentor Registration Form</h4>
      </div>
      
      <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D6A0000001Dim" method="POST" className="mentor-form">
        <input type="hidden" name="oid" value="00D6A0000001Dim" />
        <input type="hidden" name="retURL" value={retUrl} />
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input id="first_name" maxLength="40" name="first_name" size="20" type="text" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" maxLength="80" name="last_name" size="20" type="text" required />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="00N6A00000NnLIJ">Gender:</label>
            <select id="00N6A00000NnLIJ" name="00N6A00000NnLIJ" title="Gender">
              <option value="">--None--</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" maxLength="80" name="email" size="20" type="email" required />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="00NUo000002U1wr">Profession:</label>
            <input id="00NUo000002U1wr" maxLength="255" name="00NUo000002U1wr" size="20" type="text" />
          </div>
          
          <div className="form-group">
            <label htmlFor="00NUo000002U1wo">Highest Qualification:</label>
            <select id="00NUo000002U1wo" name="00NUo000002U1wo" title="Highest Qualification">
              <option value="">--None--</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Masters">Masters</option>
              <option value="Doctorate">Doctorate</option>
              <option value="Post Doctorate">Post Doctorate</option>
            </select>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="00NUo000002U1wn">Education Stream:</label>
            <select 
              id="00NUo000002U1wn" 
              name="00NUo000002U1wn" 
              title="Education Stream"
              value={educationStream}
              onChange={(e) => setEducationStream(e.target.value)}
            >
              <option value="">--None--</option>
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts/Humanities">Arts/Humanities</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="00N6A00000OgDPT">State or Province:</label>
            <input id="00N6A00000OgDPT" maxLength="50" name="00N6A00000OgDPT" size="20" type="text" />
          </div>
        </div>
        
        <div className="form-group full-width">
          <label htmlFor="00NUo000002U1wt">Subject of expertise:</label>
          <select id="00NUo000002U1wt" multiple={true} name="00NUo000002U1wt" title="Subject of expertise">
            {subjectsToShow.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
          <small className="form-help">Hold Ctrl (Windows) or Cmd (Mac) to select multiple</small>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="00N6A00000OgDPR">Pin or Zip Code:</label>
            <input id="00N6A00000OgDPR" maxLength="10" name="00N6A00000OgDPR" size="20" type="text" />
          </div>
          
          <div className="form-group">
            <label htmlFor="00N6A00000OgDPO">City:</label>
            <input id="00N6A00000OgDPO" maxLength="50" name="00N6A00000OgDPO" size="20" type="text" />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="00N6A00000OgDPP">Contact Phone:</label>
            <input id="00N6A00000OgDPP" maxLength="40" name="00N6A00000OgDPP" size="20" type="tel" />
          </div>
          
          <div className="form-group">
            <label htmlFor="00N6A00000OgDPQ">Country:</label>
            <input 
              id="00N6A00000OgDPQ" 
              name="00N6A00000OgDPQ" 
              title="Country" 
              type="text" 
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="00N6A00000OgDPM">Availability End Date:</label>
            <input id="00N6A00000OgDPM" name="00N6A00000OgDPM" type="date" />
          </div>
          
          <div className="form-group">
            <label htmlFor="00N6A00000OgDPN">Available Start Date:</label>
            <input id="00N6A00000OgDPN" name="00N6A00000OgDPN" type="date" />
          </div>
        </div>
        
        <input id="lead_source" name="lead_source" type="hidden" value="Online" />
        <input id="recordType" name="recordType" type="hidden" value="012Uo000001ZgF7" />
        <input id="company" maxLength="40" name="company" size="20" type="hidden" value="KEI" />
        
        <div className="form-actions">
          <input type="submit" name="submit" value="Submit Form" className="gi-modal-btn gi-detail-btn" />
        </div>
      </form>
    </div>
  );
};

export default MentorForm;
