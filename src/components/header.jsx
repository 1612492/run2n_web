import logo from '../images/logo.png';

function Header() {
  return (
    <header className="header">
      <section className="container navbar">
        <a href="#home">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <input type="checkbox" id="fake-input" className="fake-input" />
        <label htmlFor="fake-input" className="toggle-button">
          <span className="line line--top"></span>
          <span className="line line--middle"></span>
          <span className="line line--bottom"></span>
        </label>
        <nav className="nav">
          <a href="#features" className="nav-item">
            Features
          </a>
          <a href="#marketplace" className="nav-item">
            Marketplace
          </a>
          <a href="#roadmap" className="nav-item">
            Roadmap
          </a>
          <a
            href="https://touristversion2.gitbook.io/internal-wiki"
            rel="noreferer"
            target="_blank"
            className="nav-item"
          >
            Whitepaper
          </a>
          <a href="#testnet" className="nav-item">
            Testnet
          </a>
          <a href="#contact" className="nav-item">
            Contact
          </a>
        </nav>
      </section>
    </header>
  );
}

export default Header;
