import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'; // Assuming you have a CSS file named Contact.css for styling

function ContactForm() {
  const [state, handleSubmit] = useForm("mgegodzd");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="contact-container-form-page">
      <div className="contact-form-container-page">
        <h2 className="ContactHomePageHeader-container-page">Contact</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
          />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
          />
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
          />
          <button type="submit" disabled={state.submitting} className="button-container-page">
            Submit
          </button>
          {/* Moved validation errors after the form inputs */}
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
