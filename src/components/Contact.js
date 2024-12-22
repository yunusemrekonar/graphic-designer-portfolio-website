import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        formData,
        "your_user_id"
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-form">
        <h2 className="contact-form-title">Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-submit-button">
            Send Message
          </button>
        </form>
      </div>
      <div className="contact-info">
        <h2 className="contact-info-title">Contact Information</h2>
        <p className="contact-info-item">Yunus Emre Konar</p>
        <p className="contact-info-item">Full Stack Developer</p>
        <p className="contact-info-item">Email: your-email@example.com</p>
        <p className="contact-info-item">Phone: +123 456 7890</p>
      </div>
    </div>
  );
};

export default Contact;