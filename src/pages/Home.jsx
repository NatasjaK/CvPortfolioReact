import "../App.css";
import { Link } from "react-router-dom"; // Importera Link från react-router-dom

const Home = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>👋 Hej, jag är Natasja!</h2>
          <p>
            Jag är en <b>nyfiken och logiskt tänkande webbutvecklare</b> som trivs bäst när jag får lösa komplexa problem och bygga smarta, effektiva lösningar.  
            Jag är alltid på jakt efter <b>nya sätt att optimera kod</b> och ifrågasätter gärna ineffektiva system – både i programmering och i livet.
          </p>

          <p>
            Jag gillar <b>rena kodbaser, snygga UI/UX-lösningar</b> och teknik som faktiskt gör skillnad.  
            Just nu jobbar jag mest med <b>JavaScript, React och C#</b>, men jag är aldrig rädd för att utforska nya teknologier om de verkar intressanta (eller om jag fastnar i en teknisk rabbit hole).
          </p>

          <p>
            På fritiden? Jag uppskattar <b>pilates och cykling</b> – de perfekta aktiviteterna för att rensa tankarna och analysera livets mysterier (eller bara debugga kod mentalt).
          </p>

          <p>
            Vill du snacka kod, filosofi eller varför de bästa idéerna kommer kl. 03:00?  
          </p>
            <Link to="/portfolio">Kolla in mina projekt</Link> eller <Link to="/contact">hör av dig</Link>! 🚀
        </div>

        <div className="about-image">
          <img src="/images/nati.jpeg" alt="Picture of Natasja" />
        </div>
      </div>
    </section>
  );
};

export default Home;
