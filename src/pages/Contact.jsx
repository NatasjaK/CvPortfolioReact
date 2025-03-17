import { useState } from "react";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  // Validering av fält
  const validate = () => {
    let valid = true;
    let newErrors = { name: "", email: "", message: "" };

    // Validera namn (minst 2 bokstäver)
    if (!formData.name.trim()) {
      newErrors.name = "⚠️ Please enter your name.";
      valid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "⚠️ Name must be at least 2 characters long.";
      valid = false;
    }

    // Validera e-post
    if (!formData.email.trim()) {
      newErrors.email = "⚠️ Please enter your email.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "⚠️ Please enter a valid email.";
      valid = false;
    }

    // Validera meddelande (minst 5 tecken)
    if (!formData.message.trim()) {
      newErrors.message = "⚠️ Please enter a message.";
      valid = false;
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "⚠️ Message must be at least 5 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Hantera formulärinlämning
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccessMessage("✅ Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSuccessMessage(""); // Rensar meddelandet efter några sekunder
      }, 4000);
    }
  };

  return (
    <section id="contact">
      <h2>📬 Get in Touch</h2>
      <p>If you have any questions, feel free to reach out to me! 🚀</p>
<br />
      {/* Sociala länkar */}
      <div className="social-links">
        <a href="https://github.com/NatasjaK" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i> GitHub
        </a>
        <a href="https://linkedin.com/in/natasja-kauppi" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
        <a href="mailto:natasja@example.com">
          <i className="fa-solid fa-envelope"></i> Email
        </a>
      </div>
    <br /><br />
      {/* Kontaktformulär */}
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        {errors.message && <p className="error-message">{errors.message}</p>}

        <button type="submit" className="send-btn">Send</button>
      </form>

      {/* Lyckat meddelande */}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </section>
  );
};

export default Contact;
