import "../App.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>© 2025 Natasja Kauppi. Alla rättigheter förbehållna.</p>
        <div className="footer-links">
          <a href="https://github.com/NatasjaK" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://linkedin.com/in/natasja-kauppi" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a href="/contact"><i className="fa-solid fa-envelope"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
