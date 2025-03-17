import "../App.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>📂 Min Portfölj</h2>
      <p>Här är några av mina projekt. Klicka på ett projekt för att se koden på GitHub! 🚀</p>

      <div className="portfolio-container">

        {/* Projekt 1: Bowling Alley Manager */}
        <div className="project">
          <h3>🎳 Bowling Alley Manager</h3>
          <p>En C#-baserad applikation för att hantera en bowlinghall, inklusive spelare, matcher och turneringar.</p>
          <ul>
            <li>🔹 Registrera spelare med unika uppgifter</li>
            <li>🔹 Skapa matcher & turneringar</li>
            <li>🔹 SQLite för datalagring</li>
            <li>🔹 Använder <strong>Facade Pattern</strong> för bättre kodstruktur</li>
            <br />
          </ul>
          <a href="https://github.com/NatasjaK/BowlingAlleyManager" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i> Se på GitHub
          </a>
        </div>

        {/* Projekt 2: Movie Seat Booking */}
        <div className="project">
          <h3>🎬 Movie Seat Booking 🎟️</h3>
          <p>En React.js-baserad bokningsapp för biobiljetter med interaktivt sätesval och adminpanel.</p>
          <ul>
            <li>✅ Välj film & boka platser</li>
            <li>✅ Realtidsprisuppdatering</li>
            <li>✅ <strong>Admin-panel</strong> för CRUD av filmer</li>
            <li>✅ <strong>React Router & Axios</strong> för API-hantering</li>
            <li>✅ <strong>JSON Server</strong> simulerar backend</li>
            <br />
          </ul>
          <a href="https://github.com/NatasjaK/movie-seat-booking" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i> Se på GitHub
          </a>
        </div>

        {/* Placeholder för framtida projekt */}
        <div className="project coming-soon">
          <h3>🚧 Under utveckling...</h3>
          <p>Håll utkik! Jag jobbar på fler projekt som kommer snart. 👀</p>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
