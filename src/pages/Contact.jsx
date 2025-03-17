import "../App.css";
import { Link } from "react-router-dom"; // React Router Link för navigering

const Contact = () => {
  // Funktion för att hantera formuläret (kan kopplas till backend senare)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ditt meddelande har skickats! 🚀");
  };

  return (
    <section id="contact">
        <br /><br />
      <h2>Behöver du en utvecklare? 🚀</h2>
      <p>
        Jag är alltid öppen för nya möjligheter inom webbutveckling! Oavsett om du har ett jobb, ett projekt eller bara vill snacka kod – hör av dig! 🎯
      </p>

      <p>
        Jag svarar snabbare än en <code>console.log("Hello World!")</code>... om jag inte jagar buggar. 😄
      </p>

      <p>Skicka ett meddelande eller connecta med mig på sociala medier! 👇</p>
<br />
      {/* Sociala medier */}
      <div className="social-links">
        <a href="https://github.com/NatasjaK" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://linkedin.com/in/natasja-kauppi" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>LinkedIn
        </a>
        <a href="https://twitter.com/natasja_kauppi" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-x-twitter"></i>
  </a>
      </div>
<br /><br />
      {/* Kontaktformulär */}
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Namn:</label>
        <input type="text" id="name" name="name" placeholder="Ditt namn" required />

        <label htmlFor="email">E-post:</label>
        <input type="email" id="email" name="email" placeholder="Din e-post" required />

        <label htmlFor="message">Meddelande:</label>
        <textarea id="message" name="message" placeholder="Skriv ditt meddelande..." required></textarea>

        <button type="submit" className="send-btn">Skicka</button>
      </form>
    </section>
  );
  
};

export default Contact;
