import logo from '../images/logo.png';
import bnbImage from '../images/bnb.png';
import discordImage from '../images/discord.png';
import telegramImage from '../images/telegram.png';
import twitterImage from '../images/twitter.png';

function Footer() {
  return (
    <footer className="container footer">
      <section>
        <img src={logo} alt="logo" className="logo" />
        <p className="powered-by">
          Powered by
          <img src={bnbImage} alt="bnb" className="bnb-icon" />
          BNB Chain
        </p>
        <p>Copyright {new Date().getFullYear()} © Run2n. All Rights Reserved.</p>
      </section>
      <section className="community community--footer">
        <p className="community__title community__title--footer">Join our community</p>
        <div>
          <a
            rel="noreferer"
            target="_blank"
            href="https://discord.gg/P5MKdpeubT"
            className="community__link"
          >
            <img src={discordImage} alt="discord" className="community__image" />
          </a>
          <a
            rel="noreferer"
            target="_blank"
            href="https://t.me/run2nio"
            className="community__link"
          >
            <img src={telegramImage} alt="telegram" className="community__image" />
          </a>
          <a
            rel="noreferer"
            target="_blank"
            href="https://twitter.com/run2ndotio"
            className="community__link"
          >
            <img src={twitterImage} alt="twitter" className="community__image" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
