import discordImage from '../images/discord.png';
import telegramImage from '../images/telegram.png';
import twitterImage from '../images/twitter.png';

function Intro() {
  return (
    <section id="home" className="intro">
      <h3 className="heading">BE THE CHANGE</h3>

      <p className="sub-heading">
        Run2n is a Web3 fitness and lifestyle mobile app with inbuilt NFT gaming and Social-fi
        elements where you can earn rewards in Crypto/NFTs just by movement like walking or running.
      </p>
      <section className="community">
        <p className="community__title">Join our community</p>
        <section className="community__links">
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
        </section>
      </section>
    </section>
  );
}

export default Intro;
