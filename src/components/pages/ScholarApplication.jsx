import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ScholarApplication = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById("00N6A00000NnLJ2");
    if (dateInput) {
      dateInput.value = today;
    }
  }, []);

  const handleIframeLoad = () => {
    if (isSubmitted) {
      navigate('/for-scholars');
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div style={{ padding: "40px 20px", background: "#f4f8fb", fontFamily: "'Segoe UI', Arial, sans-serif", color: "#263746", minHeight: "100vh" }}>
      <style dangerouslySetInnerHTML={{__html: `
        /* ... existing styles ... */
        .form-container {
            max-width: 1000px;
            margin: auto;
            background: #fff;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 10px 35px rgba(23, 76, 104, 0.10);
            border: 1px solid #e3edf2;
        }

        .form-header {
            text-align: center;
            margin-bottom: 35px;
        }

        .form-header h1 {
            margin: 0;
            color: #174c68;
            font-size: 30px;
            font-weight: 700;
        }

        .form-header p {
            margin: 8px 0 0;
            color: #71808c;
            font-size: 14px;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            margin-bottom: 20px;
        }

        .form-group {
            width: 100%;
        }

        .form-group label,
        .form-group .field-label {
            display: block;
            margin-bottom: 7px;
            font-size: 14px;
            font-weight: 600;
            color: #334e5f;
        }

        .form-group input[type="text"],
        .form-group input[type="number"],
        .form-group input[type="date"],
        .form-group select {
            width: 100%;
            height: 46px;
            padding: 10px 13px;
            border: 1px solid #ccd9e1;
            border-radius: 8px;
            background: #fbfdfe;
            color: #263746;
            font-size: 14px;
            outline: none;
            transition: 0.2s ease;
        }

        .form-group input:focus,
        .form-group select:focus {
            border-color: #47bfda;
            background: #fff;
            box-shadow: 0 0 0 3px rgba(71, 191, 218, 0.15);
        }

        .form-group select {
            cursor: pointer;
        }

        .form-group input[type="checkbox"] {
            width: 18px;
            height: 18px;
            accent-color: #47bfda;
            vertical-align: middle;
            margin-right: 8px;
        }

        .help-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 18px;
            height: 18px;
            margin-left: 5px;
            border-radius: 50%;
            background: #47bfda;
            color: white;
            font-size: 11px;
            cursor: help;
        }

        .submit-row {
            text-align: center;
            margin-top: 30px;
        }

        .submit-row input[type="submit"] {
            width: 220px;
            height: 48px;
            border: none;
            border-radius: 4px;
            background: #47BFDA;
            color: white;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s ease;
        }

        .submit-row input[type="submit"]:hover {
            background: #3aa9c4;
            transform: translateY(-1px);
        }

        @media (max-width: 700px) {
            .form-container {
                padding: 25px 20px;
            }

            .form-row {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .form-header h1 {
                font-size: 24px;
            }

            .submit-row input[type="submit"] {
                width: 100%;
            }
        }
      `}} />

      <div className="form-container" style={{ marginTop: "100px" }}>

          <div className="form-header">
              <h1>Application HSS - 2027</h1>
              <p>Please provide accurate information in all applicable fields.</p>
          </div>

          <iframe 
              name="hidden_iframe" 
              id="hidden_iframe" 
              style={{ display: "none" }} 
              onLoad={handleIframeLoad}
          ></iframe>

          <form 
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D6A0000001Dim" 
              method="POST" 
              target="hidden_iframe" 
              onSubmit={handleSubmit}
          >

              <input type="hidden" name="oid" value="00D6A0000001Dim" />
              <input type="hidden" name="retURL" value={typeof window !== "undefined" ? `${window.location.origin}/for-scholars` : "https://kashmirei.org/for-scholars"} />

              <input type="hidden" id="company" name="company" value="KEI" />
              <input type="hidden" id="recordType" name="recordType" value="0126A0000019bfk" />
              <input type="hidden" id="lead_source" name="lead_source" value="Online" />
              <input type="hidden" id="00NUo000004daXZ" name="00NUo000004daXZ" value="HSSP" />
              <input type="hidden" id="00N6A00000NnLJ2" name="00N6A00000NnLJ2" />

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="first_name">First Name</label>
                      <input id="first_name" maxLength="40" name="first_name" type="text" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="last_name">Last Name</label>
                      <input id="last_name" maxLength="80" name="last_name" type="text" />
                  </div>

              </div>

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="00N6A00000NnLIJ">Gender</label>
                      <select id="00N6A00000NnLIJ" name="00N6A00000NnLIJ" title="Gender">
                          <option value="">--None--</option>
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                      </select>
                  </div>

                  <div className="form-group">
                      <label htmlFor="00N6A00000NnLI4">Date of Birth</label>
                      <input id="00N6A00000NnLI4" name="00N6A00000NnLI4" type="date" />
                  </div>

              </div>

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input id="email" maxLength="80" name="email" type="text" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" maxLength="40" name="phone" type="text" required />
                  </div>

              </div>

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="00N6A00000OgDPL">Permanent Address</label>
                      <input id="00N6A00000OgDPL" maxLength="50" name="00N6A00000OgDPL" type="text" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="00N6A00000OgDPR">Pin Code</label>
                      <input id="00N6A00000OgDPR" maxLength="10" name="00N6A00000OgDPR" type="text" />
                  </div>

              </div>

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="00N6A00000NnLIx">Student District</label>
                      <select id="00N6A00000NnLIx" name="00N6A00000NnLIx" title="Student District">
                          <option value="">--None--</option>
                          <option value="Anantnag">Anantnag</option>
                          <option value="Bandipora">Bandipora</option>
                          <option value="Budgam">Budgam</option>
                          <option value="Kulgam">Kulgam</option>
                          <option value="Kupwara">Kupwara</option>
                          <option value="Pulwama">Pulwama</option>
                          <option value="Shopian">Shopian</option>
                          <option value="Srinagar">Srinagar</option>
                          <option value="Baramulla">Baramulla</option>
                          <option value="Ganderbal">Ganderbal</option>
                      </select>
                  </div>

                  <div className="form-group">
                      <label htmlFor="00NUo000004dYE9">Tehsil</label>
                      <input id="00NUo000004dYE9" maxLength="100" name="00NUo000004dYE9" type="text" />
                  </div>

              </div>

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="00N3s00000PnHJZ">Landmark</label>
                      <input id="00N3s00000PnHJZ" maxLength="50" name="00N3s00000PnHJZ" type="text" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="00N6A00000NnLIY">School Name</label>
                      <input id="00N6A00000NnLIY" maxLength="100" name="00N6A00000NnLIY" type="text" />
                  </div>

              </div>

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="00NUo000004dYE4">Class</label>
                      <input id="00NUo000004dYE4" maxLength="10" name="00NUo000004dYE4" type="text" required />
                  </div>

                  <div className="form-group">
                      <label htmlFor="00NUo000004dYE3">Class 8th %</label>
                      <input id="00NUo000004dYE3" name="00NUo000004dYE3" type="text" required />
                  </div>

              </div>

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="00N6A00000NnLKZ">
                          Number Of Siblings
                          <span className="help-icon" title="Enter the total number of your brothers and sisters. Do NOT include yourself in this count.">❔</span>
                      </label>
                      <input id="00N6A00000NnLKZ" name="00N6A00000NnLKZ" type="number" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="00N6A00000NnLJC">Father's Name</label>
                      <input id="00N6A00000NnLJC" maxLength="50" name="00N6A00000NnLJC" type="text" />
                  </div>

              </div>

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="00N6A00000NnLJM">Father's Occupation</label>
                      <input id="00N6A00000NnLJM" maxLength="255" name="00N6A00000NnLJM" type="text" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="00NUo000004dYE6">Father's Contact Number</label>
                      <input id="00NUo000004dYE6" maxLength="40" name="00NUo000004dYE6" type="text" />
                  </div>

              </div>

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="00N6A00000NnLJH">Mother's Name</label>
                      <input id="00N6A00000NnLJH" maxLength="50" name="00N6A00000NnLJH" type="text" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="00N3s00000PnHJt">Mother's Occupation</label>
                      <input id="00N3s00000PnHJt" maxLength="50" name="00N3s00000PnHJt" type="text" />
                  </div>

              </div>

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="00NUo000004dYE8">Mother's Contact Number</label>
                      <input id="00NUo000004dYE8" maxLength="40" name="00NUo000004dYE8" type="text" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="00N3s00000PnHJe">
                          Has any of your parents passed away?
                      </label>
                      <div style={{ marginTop: "10px" }}>
                          <input id="00N3s00000PnHJe" name="00N3s00000PnHJe" type="checkbox" value="1" /> Yes
                      </div>
                  </div>

              </div>

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="00N3s00000PnHJj">Guardian's Name</label>
                      <input id="00N3s00000PnHJj" maxLength="50" name="00N3s00000PnHJj" type="text" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="00N3s00000PnHJy">Relation with Guardian</label>
                      <input id="00N3s00000PnHJy" maxLength="50" name="00N3s00000PnHJy" type="text" />
                  </div>

              </div>

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="00N3s00000PnHJo">Guardian's Occupation</label>
                      <input id="00N3s00000PnHJo" maxLength="50" name="00N3s00000PnHJo" type="text" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="00NUo000004dYnV">Guardian's Contact Number</label>
                      <input id="00NUo000004dYnV" maxLength="40" name="00NUo000004dYnV" type="text" />
                  </div>

              </div>

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="00NUo000004dYE5">Father's Annual Income</label>
                      <input id="00NUo000004dYE5" name="00NUo000004dYE5" type="text" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="00NUo000004dYE7">Mother's Annual Income</label>
                      <input id="00NUo000004dYE7" name="00NUo000004dYE7" type="text" />
                  </div>

              </div>

              <div className="form-row">

                  <div className="form-group">
                      <label htmlFor="00NUo000004dYlt">Guardian's Annual Income</label>
                      <input id="00NUo000004dYlt" name="00NUo000004dYlt" type="text" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="00NUo000004kJ0X">Any Other Annual Income</label>
                      <input id="00NUo000004kJ0X" name="00NUo000004kJ0X" type="text" />
                  </div>

              </div>

              <div className="submit-row">
                  <input type="submit" name="submit" value="Submit Application" />
              </div>

          </form>
      </div>
    </div>
  );
};

export default ScholarApplication;
