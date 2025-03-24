// MailchimpForm.js
import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

// Set your Mailchimp URL from an environment variable
const url = process.env.REACT_APP_MAILCHIMP_URL;

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () => {
    if (email && email.value.indexOf("@") > -1) {
      onValidated({ EMAIL: email.value });
      email.value = "";
    }
  };

  return (
    <div>
      <input ref={node => email = node} type="email" placeholder="Email Address" />
      <button onClick={submit}>Submit</button>
      {status === "sending" && <div>Sending...</div>}
      {status === "error" && <div dangerouslySetInnerHTML={{ __html: message }} />}
      {status === "success" && <div dangerouslySetInnerHTML={{ __html: message }} />}
    </div>
  );
};

export const MailchimpForm = () => {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm onValidated={formData => subscribe(formData)} status={status} message={message} />
      )}
    />
  );
};

export default MailchimpForm;