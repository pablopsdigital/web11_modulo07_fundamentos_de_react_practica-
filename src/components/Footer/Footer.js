import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="auto-grid">
          <section className="brand">
            <a href="catalog.html" className="footer-brand">
              <img src="./brand.svg" alt="Brand" />
            </a>
            <p className="brand-tagline">
              &copy; Todos los derechos reservados
            </p>
          </section>

          <section className="links1">
            <nav className="about-nav">
              <ul>
                <li>
                  <a href="404.html" className="active">
                    About us
                  </a>
                </li>
                <li>
                  <a href="404.html">Contact</a>
                </li>
                <li>
                  <a href="404.html">NodePop PRO</a>
                </li>
                <li>
                  <a href="404.html">Press</a>
                </li>
              </ul>
            </nav>
          </section>

          <section className="links2">
            <nav className="carrers-nav">
              <ul>
                <li>
                  <a href="404.html" className="active">
                    Carrers
                  </a>
                </li>
                <li>
                  <a href="404.html">Support</a>
                </li>
                <li>
                  <a href="404.html">Privacy policy</a>
                </li>
                <li>
                  <a href="404.html">Cookies</a>
                </li>
              </ul>
            </nav>
          </section>

          <section>
            <p>Follow us:</p>
            <nav className="social-icons">
              <ul>
                <li>
                  <a href="https://www.facebook.com/keepcoding.training/">
                    <img src="./resources/svg/icon-facebook.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCz-oGx94gqD1lICJQZGniLA">
                    <img src="./resources/svg/icon-youtube.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/intent/follow?screen_name=KeepCoding_">
                    <img src="./resources/svg/icon-twitter.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/keepcoding_es/?hl=es">
                    <img src="./resources/svg/icon-instagram.svg" alt="" />
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
