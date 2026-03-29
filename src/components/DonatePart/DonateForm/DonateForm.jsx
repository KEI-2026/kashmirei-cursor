import "../../../styles/Donate/donate-form.css";

const DonateForm = () => {
  return (
    <section className="section-donate-form" id="cc">
      <div className="donate-form-inner">

        <div className="donate-form-header">
          <span className="donate-section-label">SECURE PAYMENT</span>
          <h2>Donate by Credit or Debit Card</h2>
          <p>
            Complete the form below to make a secure donation using Visa, Mastercard,
            American Express, or Discover. A tax receipt will be emailed to you.
          </p>
        </div>

        <div className="embed-container">
          <iframe
            src="https://connect.clickandpledge.com/w/Form/b47876eb-7004-44d4-8d6e-e85eca06e133"
            title="KEI Donation Form"
            frameBorder="0"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
};

export default DonateForm;
