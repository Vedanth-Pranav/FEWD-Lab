import React, { useState } from 'react';
import './EmailForm.css'

const formConfig = [
  { id: 1, type: "text", name: "firstName", placeholder: "First Name" },
  { id: 2, type: "text", name: "lastName", placeholder: "Last Name" },
  { id: 3, type: "email", name: "email", placeholder: "Email" },
  { id: 4, type: "textarea", name: "message", placeholder: "Message" },
];


function InputField({ type, name, placeholder, value, onChange }) {
  if (type === "textarea") {
    return (
      <textarea
        className="form-textarea"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        autoComplete="off"
      />
    );
  }

  return (
    <input
      className="form-input"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      autoComplete="off"
    />
  );
}

const EmailForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    alert('Form submitted successfully!');

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="form-container">
      <form className="email-form" onSubmit={handleSubmit}>
        {formConfig.map((field) => (
          <div className="form-field" key={field.id}>
            <label className="form-label">
              {field.placeholder}:
              <InputField
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
              />
            </label>
          </div>
        ))}
        <button className="form-button" type="submit">Send</button>
      </form>
    </div>
  );
};

export default EmailForm;
