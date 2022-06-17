import logo from '../images/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="logo" />
      <p>Copyright {new Date().getFullYear()} © Run2n. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
