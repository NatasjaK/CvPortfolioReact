import "../App.css";

const Home = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>👋 Hej, jag är Natasja!</h2>
          <p>Jag är en <b>nyfiken och logiskt tänkande webbutvecklare</b>...</p>
          <p>Jag gillar <b>rena kodbaser</b> och <b>snygga UI/UX-lösningar</b>...</p>
          <a href="/portfolio">Kolla in mina projekt</a> eller <a href="/contact">hör av dig</a>! 🚀
        </div>
        <div className="about-image">
          <img src="/images/nati.jpeg" alt="Picture of Natasja" />
        </div>
      </div>
    </section>
  );
};

export default Home;
