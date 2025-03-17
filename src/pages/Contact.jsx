import "../App.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Behöver du en utvecklare? 🚀</h2>
      <p>Skicka ett meddelande!</p>
      <form>
        <input type="text" placeholder="Ditt namn" required />
        <input type="email" placeholder="Din e-post" required />
        <textarea placeholder="Skriv ditt meddelande..." required></textarea>
        <button type="submit">Skicka</button>
      </form>
    </section>
  );
};

export default Contact;
