import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [form, setForm] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_uf7dzgr',       
      'template_gqs9pxv',      
      form,                   
      '0wBxImsIvZrDVPsGY'      
    ).then(
      () => {
        setStatus('Message sent successfully!');
        setForm({ from_name: '', reply_to: '', message: '' });
        setLoading(false);
      },
      (error) => {
        console.error('FAILED...', error);
        setStatus('Failed to send message. Please try again.');
        setLoading(false);
      }
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Name</label>
          <input
            type="text"
            name="from_name"
            value={form.from_name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            name="reply_to"
            value={form.reply_to}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded mt-1"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {status && (
        <p className={`mt-4 ${status.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default ContactUs;