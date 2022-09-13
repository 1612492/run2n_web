import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logo from '../images/logo.png';

function Header() {
  return (
    <header className="header">
      <section className="container navbar">
        <HashLink to="/#home">
          <img src={logo} alt="logo" className="logo" />
        </HashLink>
        <input type="checkbox" id="fake-input" className="fake-input" />
        <label htmlFor="fake-input" className="toggle-button">
          <span className="line line--top"></span>
          <span className="line line--middle"></span>
          <span className="line line--bottom"></span>
        </label>
        <nav className="nav">
          <HashLink to="/#features" className="nav-item">
            Features
          </HashLink>
          <HashLink to="/#marketplace" className="nav-item">
            Marketplace
          </HashLink>
          <HashLink to="/#roadmap" className="nav-item">
            Roadmap
          </HashLink>
          <a
            href="https://touristversion2.gitbook.io/whitepaper"
            rel="noreferer"
            target="_blank"
            className="nav-item"
          >
            Whitepaper
          </a>
          <HashLink to="/#testnet" className="nav-item">
            Testnet
          </HashLink>
          <HashLink to="/#contact" className="nav-item">
            Contact
          </HashLink>
          {/* <Link to="/mint-pass" className="nav-item"> */}
          {/*   Mint pass */}
          {/* </Link> */}
        </nav>
      </section>
    </header>
  );
}

export default Header;
