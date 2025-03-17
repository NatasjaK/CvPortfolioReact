import "../App.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>📂 Min Portfölj</h2>
      <p>Här är några av mina projekt...</p>
      <div className="portfolio-container">
        <div className="project">
          <h3>🎳 Bowling Alley Manager</h3>
          <p>En C#-baserad applikation för att hantera en bowlinghall...</p>
          <a href="https://github.com/NatasjaK/BowlingAlleyManager" target="_blank">
            <i className="fa-brands fa-github"></i> Se på GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
